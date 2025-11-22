import { getPartners, createPartners, partnerUpdate } from "../controllers/partnerController";
import { Router } from "express";


const router = Router();


// Маршруты для покупателей

// Добавить покупателя POST /api/partners/bayers
router.post('/bayers', createPartners);

// Получить всех партнеров GET /api/partners
router.get('/', getPartners);

// Получить всех покупателей GET /api/partners/bayers
// router.get('/bayers', getBayers);

// Изменить данные партнера

router.put('/update', partnerUpdate);

export default router;