import { Router } from 'express';
import controller from '../controllers/controller.js';
const router = Router();

router.get('/', controller.messagesGet);
router.get('/new', controller.createMessageGet);
router.post('/new', controller.createMessagePost);

export default router;
