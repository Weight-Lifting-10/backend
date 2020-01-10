const router = require("express").Router();
const db = require("./userModel.js");
const restrict = require("../authorization/authorizationMid.js");

router.get("/", (req, res) => {
  db.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.getById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(400).json({ message: "The user id given does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  db.update(id, changes)
    .then(changes => {
      if (changes) {
        res.status(200).json({ message: "User successfully updated." });
      } else {
        res.status(404).json({ message: "The user given does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.get("/:id/exercises", async (req, res) => {
  console.log(req.params.id);
  try {
    const exercises = await db.getUserExercises(req.params.id);
    res.status(200).json(exercises);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error displaying the exercises with the id given."
    });
  }
});

module.exports = router;