import query from '../db/queries.js';

async function messagesGet(req, res) {
  const messages = await query.getAllMessage();
  res.render('index', { title: 'Mini Messageboard', messages: messages });
}

async function createMessageGet(req, res) {
  res.render('form');
}

async function createMessagePost(req, res) {
  query.createMessage({ text: req.body.message, user: req.body.name, added: new Date() });
  res.redirect('/');
}

export default { messagesGet, createMessageGet, createMessagePost };
