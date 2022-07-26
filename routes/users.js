const express = require('express');
const users = require('../userdata');

const usersRouter = express.Router();

usersRouter.post('/', (req, res) => {
    const newUser = req.body;
    newUser.forEach((user) => users.push(user));
    return res.status(201).json(users);
})

usersRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const newUser = req.body;
    users.forEach((user, i) => {
        if (user.id === Number(id)) (
            users.splice(i, 1, newUser)
        );
    });
    return res.status(200).json(users);
})

usersRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    users.forEach((user, i) => {
        if (user.id === Number(id)) (
            users.splice(i, 1)
        );
    });
    return res.status(200).json(users);
})

usersRouter.get('/', (_req, res) => {
    return res.status(201).json(users);
})

module.exports = usersRouter;
