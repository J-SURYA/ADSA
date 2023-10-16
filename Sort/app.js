const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sortAlgorithms = require('./sortAlgorithms');

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/sort', (req, res) => {
    const { array, sortMethod } = req.body;

    if (!array || !sortMethod || !Array.isArray(array)) {
        return res.status(400).json({ error: 'Invalid input.' });
    }

    if (!sortAlgorithms[sortMethod]) {
        return res.status(400).json({ error: 'Invalid sorting method.' });
    }

    const steps = sortAlgorithms[sortMethod](array);
    res.json({ steps });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
