import { Client } from 'pg';

async function createDatabase() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '12345',
  });

  try {
    await client.connect();
    await client.query('CREATE DATABASE projectdb');
    console.log('Database created successfully!');
  } catch (err) {
    if (err.code === '42P04') {
      console.log('Database already exists');
    } else {
      console.error('Error creating database:', err);
    }
  } finally {
    await client.end();
  }
}

createDatabase();
