import express from 'express';

const app = express();

const makeSum = (numberOne: number, numberTwo: number) => {
    return numberOne + numberTwo;
};

app.get('/', function (req, res) {
    const sum = makeSum(1, 2);
    res.send('Hello World' + sum);
});

app.listen(3000, () => {
    console.log('Server started listening on port 3000');
});
