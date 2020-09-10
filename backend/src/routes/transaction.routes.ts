import { Router } from 'express';

const transactionRouter = Router();

transactionRouter.post('/', async (request, response) => {
  try {
    return response.status(200).json({"hello": "world"})
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
