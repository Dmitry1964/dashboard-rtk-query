import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AppError } from './errorHandler';

// Расширяем интерфейс Request для добавления userId
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // Получаем токен из заголовка
    const token = req.headers.authorization;
    
    // if (!authHeader || !authHeader.startsWith('Bearer ')) {
    //   throw new AppError('Токен доступа не предоставлен', 401);
    // }

    if (!token) {
      throw new AppError('Токен доступа не предоставлен', 401);
    }
    
    // const token = token.substring(7); // Убираем 'Bearer ' из начала
    
    // if (!token) {
    //   throw new AppError('Токен доступа не предоставлен', 401);
    // }
    
    try {
      // Проверяем токен
      const secret = process.env.JWT_SECRET || 'fallback_secret';
      const decoded = jwt.verify(token, secret) as { userId: string };
      
      // Добавляем userId в объект запроса
      req.userId = decoded.userId;
      
      next();
    } catch (jwtError) {
      throw new AppError('Недействительный токен доступа', 401);
    }
    
  } catch (error) {
    next(error);
  }
};

// Middleware для проверки роли администратора
export const requireAdmin = (req: Request, res: Response, next: NextFunction): void => {
  // @ts-ignore - userId добавляется middleware аутентификации
  if (req.user && req.user.role !== 'admin') {
    next(new AppError('Доступ запрещен. Требуются права администратора', 403));
    return;
  }
  
  next();
};
