const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./authorizationModel.js");
const secrets = require("./secrets.js");

router.get("/", (req, res) => {
    db.getAll()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        res.status(500).json(err.message);
      });
  });

router.post("/register", (req, res) => {
  const user = req.body;

  if (!user.username || !user.password) {
    res.status(401).json({
      message: "Please provide a username and password."
    });
  } else {
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    db.addNew(user)
      .then(registered => {
        const token = generateToken(registered);
        res.status(201).json({ registered, token });
      })
      .catch(err => {
          console.log(err);
        res.status(500).json(err.message);
      });
  }
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  db.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user); 
        res.status(200).json({ user_id: user.id,
          message: `Welcome, ${user.username}.`,
          token
        });
      } else {
        res.status(401).json({ message: "Please provide valid credentials." });
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "12h"
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;