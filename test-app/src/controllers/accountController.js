"use strict";
exports.__esModule = true;
exports.deleteAccountById = exports.updateAccountById = exports.createAccount = exports.getAccountById = exports.getAccounts = void 0;
// In-memory data storage
var accounts = [];
// Generate a new unique ID for each account
var accountId = 1;
/**
 * Objective: 'Get All Accounts'
 * parameters: req,res
 * returns: status, data/error
 **/
var getAccounts = function (req, res) {
    try {
        res.json(accounts);
    }
    catch (error) {
        res.status(400).send({ error: error });
    }
};
exports.getAccounts = getAccounts;
/**
 * Objective: 'Get an account by ID'
 * parameters: req,res
 * returns: status, data/error
 **/
var getAccountById = function (req, res) {
    try {
        var id_1 = parseInt(req.params.id);
        var account = accounts.find(function (acc) { return acc.id === id_1; });
        if (account) {
            res.json(account);
        }
        else {
            res.status(404).json({ error: 'Account not found' });
        }
    }
    catch (error) {
        res.status(400).send({ error: error });
    }
};
exports.getAccountById = getAccountById;
/**
 * Objective: 'Create a new account'
 * parameters: req,res
 * returns: status, data/error
 **/
var createAccount = function (req, res) {
    try {
        var _a = req.body, name_1 = _a.name, address = _a.address, phone = _a.phone, email = _a.email;
        var newAccount = {
            id: accountId++,
            name: name_1,
            address: address,
            phone: phone,
            email: email
        };
        accounts.push(newAccount);
        res.status(201).json(newAccount);
    }
    catch (error) {
        res.status(400).send({ error: error });
    }
};
exports.createAccount = createAccount;
/**
 * Objective: 'Update an account by ID'
 * parameters: req,res
 * returns: status, data/error
 **/
var updateAccountById = function (req, res) {
    try {
        var id_2 = parseInt(req.params.id);
        var _a = req.body, name_2 = _a.name, address = _a.address, phone = _a.phone, email = _a.email;
        var account = accounts.find(function (acc) { return acc.id === id_2; });
        if (account) {
            account.name = name_2 || account.name;
            account.address = address || account.address;
            account.phone = phone || account.phone;
            account.email = email || account.email;
            res.json(account);
        }
        else {
            res.status(404).json({ error: 'Account not found' });
        }
    }
    catch (error) {
        res.status(400).send({ error: error });
    }
};
exports.updateAccountById = updateAccountById;
/**
 * Objective: 'Delete an account by ID'
 * parameters: req,res
 * returns: status, data/error
 **/
var deleteAccountById = function (req, res) {
    try {
        var id_3 = parseInt(req.params.id);
        var index = accounts.findIndex(function (acc) { return acc.id === id_3; });
        if (index !== -1) {
            var deletedAccount = accounts.splice(index, 1)[0];
            res.json(deletedAccount);
        }
        else {
            res.status(404).json({ error: 'Account not found' });
        }
    }
    catch (error) {
        res.status(400).send({ error: error });
    }
};
exports.deleteAccountById = deleteAccountById;
