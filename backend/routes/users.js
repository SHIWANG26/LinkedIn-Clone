const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

router.get('/:id', authMiddleware, userController.getUserProfile);
router.put('/profile', authMiddleware, userController.updateProfile);

module.exports = router;
