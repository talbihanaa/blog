
const express = require('express');
const { register , login } = require('../handlers/user');

const userRoute = express.Router();


userRoute.post('/inscription', register);
userRoute.post('/signIn' , login)
// userRoute.get('/questions/:id', (req, res) => {
//     const id = req.params.id;
//     db.select()
//       .from('user')
//       .where({ id })
//       .first()
//       .then((question) => {
//         if (question) {
//           res.json(question);
//         } else {
//           res.status(404).json({ error: 'Question not found' });
//         }
//       })
//       .catch(() => {
//         res.sendStatus(422);
//       });
//   });
  






module.exports = userRoute