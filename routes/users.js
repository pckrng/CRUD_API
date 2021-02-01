import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Joe",
        lastName: "Pickering",
        age: 23
    }
]

router.get('/', (req, res) => {

    res.send(users);
});

router.post('/', (req, res) => {

    const user = req.body;

    users.push(user);

    res.send(`User ${user.firstName} has been added!`);
});

export default router;