const express = require('express');
const { registerUser, loginUser, viewProfile, editProfile } = require('../controllers/userController');
const authenticate = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticate, viewProfile);
router.put('/profile', authenticate, editProfile);

module.exports = router;
