import Express from 'express';
import { InfoLogger } from './utils/logger';
import cors from 'cors';
import defaultConfig from './config';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(defaultConfig.port, () => {
  InfoLogger(`Server is running on port ${defaultConfig.port}`);
});
