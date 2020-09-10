import { Router } from 'express';

import transactionInterface from '../interfaces/trasanction';
import transactionController from '../controllers/transaction';

const transactionRouter = Router();

transactionRouter.post('/', async (request, response) => {
  try {

    var transactionObj = new transactionController()

    return response.status(200).json(transactionObj.createQRcode(request.body))
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
