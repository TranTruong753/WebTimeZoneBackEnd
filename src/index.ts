import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const port = 5000;

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});