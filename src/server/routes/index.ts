import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
  return res.send('Aplicação on-line');
  
});

export { router };
