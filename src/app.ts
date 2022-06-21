import express, { Express } from 'express';
import { itemsRouter } from './Router/ItemsRouter';

const PORT = 3000;

const app: Express = express();

app.use('/items', itemsRouter);

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});