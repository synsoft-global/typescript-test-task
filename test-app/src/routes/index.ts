import express from 'express';
import { getAccounts, getAccountById, createAccount, updateAccountById, deleteAccountById } from '../controllers/accountController';
export const router = express.Router();


router.get('/accounts',getAccounts);
router.get('/accounts/:id',getAccountById);
router.post('/accounts',createAccount);
router.put('/accounts/:id',updateAccountById);
router.delete('/accounts/:id',deleteAccountById);



export default router;