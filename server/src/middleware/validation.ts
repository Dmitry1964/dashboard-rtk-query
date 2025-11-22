import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import { AppError } from './errorHandler';

// Middleware для проверки результатов валидации
export const validate = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    throw new AppError(`Ошибка валидации: ${errorMessages.join(', ')}`, 400);
  }
  
  next();
};

// Валидация для регистрации пользователя
export const validateRegistration = [
  body('email')
    .isEmail()
    .withMessage('Введите корректный email адрес')
    .normalizeEmail(),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Пароль должен содержать минимум 6 символов'),
  body('firstName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Имя должно содержать от 2 до 50 символов'),
  body('lastName')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Фамилия должна содержать от 2 до 50 символов'),
  body('phone')
    .trim()
    .matches(/^\+7\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/)
    .withMessage('Телефон должен быть в формате +7(960) 872-66-22'),
  body('position')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Должность должна содержать от 2 до 50 символов'),
  validate
];

// Валидация для входа пользователя
export const validateLogin = [
  body('email')
    .isEmail()
    .withMessage('Введите корректный email адрес')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('Пароль обязателен'),
  validate
];

// Валидация для обновления пользователя
export const validateUserUpdate = [
  body('firstName')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Имя должно содержать от 2 до 50 символов'),
  body('lastName')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Фамилия должна содержать от 2 до 50 символов'),
  body('role')
    .optional()
    .isIn(['user', 'admin'])
    .withMessage('Роль должна быть "user" или "admin"'),
  body('isActive')
    .optional()
    .isBoolean()
    .withMessage('isActive должно быть булевым значением'),
  validate
];
