import express from 'express';
import morgan from 'morgan';
import { handleGetNews } from './controllers/news.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.json('news-veiwer api');
});

app.get('/news', handleGetNews);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is runniing on port ${PORT}`);
});
