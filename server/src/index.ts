import express from 'express';
import prisma from './db.js';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', async (req, res) => {
  try {
    const allusers = await prisma.dummy_User.findMany();
    res.json(allusers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});