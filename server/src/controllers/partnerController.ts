import Partner from '../models/Partner';
import {Request, Response, NextFunction} from 'express';



// Создать нового покупателя

export const createPartners = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
        const {shortName, inn, phone, contacts, roles} = req.body;

        // базовая валидация
        if (!inn || !shortName) {
            res.status(400).json({ success: false, message: 'Требуются поля shortName и inn' });
            return;
        }

        // проверка на ИНН
        const existingPartner = await Partner.findOne({inn});
        if (existingPartner) {
            res.status(409).json({ success: false, message: 'Партнер с таким ИНН уже существует' });
            return;
        }

        const partner = await Partner.create({ shortName, inn, phone, contacts, roles });

        res.status(201).json({ success: true, data: partner });
    } catch (error) {
        next(error);
    }
};

// Получить всех партнеров

export const getPartners = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
        const partners = await Partner.find();
        if (partners.length === 0) {
            res.status(404).json({ success: false, message: 'Партнеры не найдены' });
            return;
        }
        res.status(200).json({ success: true, partners: partners });
    } catch (error) {
        next(error);
    }
};

// Редактировать карточку партнера

export const partnerUpdate = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    try {
        // const inn=req.params.inn || req.body.inn;
        const {shortName, phone, contacts, roles, inn} = req.body;

        if (!inn) {
            res.status(400).json({ success: false, message: 'ИНН необходим для поиска партнера' });
            return;
        }

        const partner = await Partner.findOne({inn});
        if (!partner) {
            res.status(404).json({ success: false, message: 'Партнер не найден' });
            return;
        }

        // обновляем только переданные поля
        if (shortName !== undefined) partner.shortName = shortName;
        if (phone !== undefined) partner.phone = phone;
        if (contacts !== undefined) partner.contacts = contacts;
        if (roles !== undefined) partner.roles = roles;

        await partner.save();
        res.status(200).json({ success: true, message: 'Партнер успешно обновлен', data: partner });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Ошибка сервера при обновлении партнера' });
        next(error);
    }
};