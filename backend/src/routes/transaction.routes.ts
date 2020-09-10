import { Router } from 'express';

import transactionInterface from '../interfaces/transactionInterface';
import transactionController from '../controllers/transaction';

const transactionRouter = Router();

transactionRouter.post('/', async (request, response) => {
  try {
    var obj = new transactionController()

    return response.status(200).json(obj.createQRcode())
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
