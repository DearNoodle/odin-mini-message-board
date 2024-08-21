import pool from './pool.js';
async function getAllMessage() {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
}

async function createMessage(data) {
  const SQL = `INSERT INTO messages (text, username, added) VALUES
  ($1, $2, $3)`;
  await pool.query(SQL, [data.text, data.user, data.added]);
}

export default { getAllMessage, createMessage };
