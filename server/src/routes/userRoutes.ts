import { Router } from 'express';
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/userController';
import { authenticate } from '../middleware/auth';
import { validateRegistration, validateUserUpdate } from '../middleware/validation';

const router = Router();

// Все маршруты требуют аутентификации
router.use(authenticate);

// GET /api/users - получить всех пользователей
router.get('/', getUsers);

// GET /api/users/:id - получить пользователя по ID
router.get('/:id', getUserById);

// POST /api/users - создать нового пользователя
router.post('/', validateRegistration, createUser);

// PUT /api/users/:id - обновить пользователя
router.put('/:id', validateUserUpdate, updateUser);

// DELETE /api/users/:id - удалить пользователя
router.delete('/:id', deleteUser);

export default router;
