import { Router } from 'express';
import { messages } from './newRouter.js';

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

export { indexRouter };
