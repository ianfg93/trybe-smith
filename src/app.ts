import express from 'express';
import productsRouter from './router/productsRouter';
import userRouter from './router/userRouter';
import ordersRouter from './router/ordersRouter';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', ordersRouter);

export default app;
