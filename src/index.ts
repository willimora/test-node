import 'reflect-metadata';
import { createConnections } from 'typeorm';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';

const PORT = process.env.PORT || 3000;

createConnections()
  .then(async () => {

    const app = express();

    app.use(cors());
    app.use(helmet());

    app.use(express.json());

    app.use('/', routes);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(error => console.log(error));
