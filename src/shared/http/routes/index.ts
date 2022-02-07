import productsRouter from '@modules/products/routes/products.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/cardapio', productsRouter);

routes.get('/', (request, response) => {
  return response.json({ message: 'Rota Principal! ' });
});

export default routes;
