import petRouter from './routes/index.js';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 3001 || process.env.DATABASE_URL;

app.use(express.json());
app.use(cors());

app.use('/pets', petRouter);

app.get('/', function (req, res) {
  res.json({ success: true, payload: 'Welcome to da backendz' });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
/*
cats router and dogs router

*/
