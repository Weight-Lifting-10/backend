const jwt = require('jsonwebtoken');
const secrets = require('./secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    console.log(secrets.jwtSecret)
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if(err) {
            res.status(401).json({ message: "Invalid token"})
        } else {           
            req.decodedToken = decodedToken;
            next();
        }
    });
};