const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();
const authRouter = require('./authorization/authorizationRouter.js');
const exercisesRouter = require('./exercises/exercisesRouter.js');
const userRouter = require('./user/userRouter.js');

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/auth', authRouter);
server.use('/exercises', exercisesRouter);
server.use('/user', userRouter);

server.get('/', (req, res) => {
    res.status(200).send({message: 'BW Workout Journal'});
  });
  
  // server.listen(3000, () =>
  //   console.log('Server running on http://localhost:3000')
  // );

module.exports = server;