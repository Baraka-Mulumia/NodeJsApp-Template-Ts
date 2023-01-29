import { InfoLogger } from './utils/logger';
import cors from 'cors';
import morgan from 'morgan';
import Express from 'express';

const app = Express();
app.use(cors());
app.use(Express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(8080, () => {
  InfoLogger('Creativity starts with viewing the whole world differently');
});
