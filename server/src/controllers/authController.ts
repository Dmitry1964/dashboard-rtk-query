import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { AppError } from '../middleware/errorHandler';

// Генерация JWT токена
const generateToken = (userId: string): string => {
  const secret = process.env.JWT_SECRET || 'fallback_secret';
  return jwt.sign({ userId }, secret, { expiresIn: '24h' });
};

// Регистрация пользователя
export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    console.log('Полученные данные регистрации:', req.body);
    const { email, password, firstName, lastName, phone, position } = req.body;
    
    // Проверяем, существует ли пользователь с таким email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new AppError('Пользователь с таким email уже существует', 400);
    }
    
    // Создаем нового пользователя
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      phone,
      position,
    });
    
    // Генерируем токен
    const token = generateToken(user._id);
    
    res.status(201).json({
      success: true,
      message: 'Пользователь успешно зарегистрирован',
      // data: {
        user: {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          // role: user.role,
          phone: user.phone,
          position: user.position,
        },
        token
      // }
    });
  } catch (error) {
    next(error);
  }
};

// Вход пользователя
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;
    
    // Проверяем, что email и пароль предоставлены
    if (!email || !password) {
      throw new AppError('Email и пароль обязательны', 400);
    }
    
    // Ищем пользователя
    const user = await User.findOne({ email, isActive: true });
    if (!user) {
      throw new AppError('Неверные учетные данные', 401);
    }
    
    // Проверяем пароль
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      throw new AppError('Неверные учетные данные', 401);
    }
    
    // Генерируем токен
    const token = generateToken(user._id);
    
    res.status(200).json({
      success: true,
      message: 'Вход выполнен успешно',
      data: {
        user: {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          // role: user.role
        },
        token
      }
    });
  } catch (error) {
    next(error);
  }
};

// Получить текущего пользователя
export const getMe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // @ts-ignore - userId добавляется middleware аутентификации
    const user = await User.findById(req.userId).select('-password');
    
    if (!user) {
      throw new AppError('Пользователь не найден', 404);
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    next(error);
  }
};
