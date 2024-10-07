import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { renderChat } from '../controllers/chatController.js';

const router = express.Router();

// Ruta protegida para el chat
router.get('/', verifyToken, renderChat);

export default router;