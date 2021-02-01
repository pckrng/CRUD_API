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
    console.log(users);

    res.send(users);
});

export default router;