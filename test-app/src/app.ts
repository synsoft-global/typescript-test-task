import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import config from './config/config';
import account from './routes/index';
const app: Express = express();

app.use(
  cors({
    // origin is given a array if we want to have multiple origins later
    origin: [config.cors_origin],
    credentials: true,
  })
);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Helmet is used to secure this app by configuring the http-header
app.use(helmet());

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/', account);

export default app;
