import { Router } from 'express';
import userRoutes from './userRoutes';
import authRoutes from './authRoutes';
import partnerRoutes from './partnerRoutes';

const router = Router();

// Основной маршрут для проверки API
router.get('/', (req, res) => {
  res.json({
    message: '🚀 API работает!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Подключаем маршруты
router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/partners', partnerRoutes);

export default router;
