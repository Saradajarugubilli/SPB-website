const express = require('express');
const router = express.Router();
const {
  registerUser,
  getUserProfile,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.post('/register', registerUser);
router.get('/profile/:id', getUserProfile);
router.put('/profile/:id', updateUser);
router.delete('/profile/:id', deleteUser);

module.exports = router;
