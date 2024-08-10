import { Router } from 'express';
const newRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date('1999-09-09'),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date('2000-01-01'),
  },
];

newRouter.get('/', (req, res) => {
  res.render('form');
});

newRouter.post('/', (req, res) => {
  messages.push({ text: req.body.message, user: req.body.name, added: new Date() });
  res.redirect('/');
});

export { newRouter, messages };
