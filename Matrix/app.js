const express = require('express');
const bodyParser = require('body-parser');
const { matrixChainMultiplication, printOptimalParenthesization } = require('./matrix-chain');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { dimensions: '', minScalarMultiplications: null, optimalParenthesization: null });
});

app.post('/calculate', (req, res) => {
    const dimensions = req.body.dimensions.split(',').map(Number);
    const { minScalarMultiplications, s } = matrixChainMultiplication(dimensions);
    const optimalParenthesization = printOptimalParenthesization(s, 0, dimensions.length - 2);
    res.render('index', { dimensions: dimensions, minScalarMultiplications, optimalParenthesization });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
