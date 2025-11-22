import { Router } from 'express';
import {
  register,
  login,
  getMe
} from '../controllers/authController';
import { authenticate } from '../middleware/auth';
import { validateRegistration, validateLogin } from '../middleware/validation';

const router = Router();

// POST /api/auth/register - регистрация
router.post('/register', validateRegistration, register);

// POST /api/auth/login - вход
router.post('/login', validateLogin, login);

// GET /api/auth/me - получить текущего пользователя (требует аутентификации)
router.get('/me', authenticate, getMe);

export default router;
