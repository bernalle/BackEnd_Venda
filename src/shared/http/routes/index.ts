import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Rota Principal! ' });
});

routes.get('/Cardapio', (request, response) => {
  return response.json({ message: 'Rota Cardapio! ' });
});

routes.get('/Pagamento', (request, response) => {
  return response.json({ message: 'Rota Pagamento! ' });
});

routes.get('/Edicao', (request, response) => {
  return response.json({ message: 'Rota Edicao! ' });
});

export default routes;
