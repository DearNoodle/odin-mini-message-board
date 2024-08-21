// import dotenv from 'dotenv';
// // import { neon } from '@neondatabase/serverless';

// // dotenv.config();

// const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// // const sql = neon(`postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`);

// async function getPlayingWithNeonData() {
//   const result = await sql`
//     SELECT * FROM playing_with_neon;
//   `;
//   console.log(result);
// }

// getPlayingWithNeonData();

import express from 'express';
import path from 'path';
import router from './routes/router.js';

const app = express();
const __dirname = import.meta.dirname;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
