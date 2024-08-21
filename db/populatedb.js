import pg from 'pg';
const { Client } = pg;

import dotenv from 'dotenv';
dotenv.config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages 
(id SERIAL PRIMARY KEY,text VARCHAR(255) ,username VARCHAR(255) ,added TIMESTAMP);

INSERT INTO messages (text, username, added) VALUES
('Hi there!', 'Amando', '1999-09-09'),
('Hello World!', 'Charles', '2000-01-01');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PGDATABASE}`,
    ssl: {
      sslmode: 'require',
    },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
