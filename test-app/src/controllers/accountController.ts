import type { Request, Response } from 'express';
// Account interface
interface Account {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
}

// In-memory data storage
let accounts: Account[] = [];

// Generate a new unique ID for each account
let accountId = 1;

/**
 * Objective: 'Get All Accounts'
 * parameters: req,res
 * returns: status, data/error
 **/
export const getAccounts = (req: Request, res: Response) => {
  try {
    res.json(accounts);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

/**
 * Objective: 'Get an account by ID'
 * parameters: req,res
 * returns: status, data/error
 **/
export const getAccountById = (req: Request, res: Response) => {
  try {
    const id = req.params['id'];
    if (id) {
      const accountId = parseInt(id);
      if (!isNaN(accountId)) {
        const account = accounts.find((acc) => acc.id === accountId);
        if (account) {
          res.json(account);
          return;
        }
      }
    }
    res.status(404).json({ error: 'Account not found' });
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

/**
 * Objective: 'Create a new account'
 * parameters: req,res
 * returns: status, data/error
 **/
export const createAccount = (req: Request, res: Response) => {
  try {
    const { name, address, phone, email } = req.body;
    const newAccount: Account = {
      id: accountId++,
      name,
      address,
      phone,
      email,
    };

    accounts.push(newAccount);

    res.status(201).json(newAccount);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

/**
 * Objective: 'Update an account by ID'
 * parameters: req,res
 * returns: status, data/error
 **/
export const updateAccountById = (req: Request, res: Response) => {
  try {
    const id = req.params['id'];
    if (id) {
      const accountId = parseInt(id);
      if (!isNaN(accountId)) {
        const account = accounts.find((acc) => acc.id === accountId);
        if (account) {
          const { name, address, phone, email } = req.body;
          account.name = name || account.name;
          account.address = address || account.address;
          account.phone = phone || account.phone;
          account.email = email || account.email;
          res.json(account);
          return;
        }
      }
    }
    res.status(404).json({ error: 'Account not found' });
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

/**
 * Objective: 'Delete an account by ID'
 * parameters: req,res
 * returns: status, data/error
 **/
export const deleteAccountById = (req: Request, res: Response) => {
  try {
    const id = req.params['id'];
    if (id) {
      const accountId = parseInt(id);
      if (!isNaN(accountId)) {
        const index = accounts.findIndex((acc) => acc.id === accountId);

        if (index !== -1) {
          const deletedAccount = accounts.splice(index, 1)[0];
          res.json(deletedAccount);
          return;
        }
      }
    }
    res.status(404).json({ error: 'Account not found' });
  } catch (error) {
    res.status(400).send({ error: error });
  }
};
