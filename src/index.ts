import express from 'express';

const app = express();

const makeSum = (numberOne: number, numberTwo: number) => {
    return numberOne + numberTwo;
};

app.get('/', function (req, res) {
    const sum = makeSum(1, 2);
    const sum2 = makeSum(sum, 10000);
    res.send('Hello World' + sum2);
});

app.listen(3000, () => {
    console.log('Server started listening on port 3000');
});
