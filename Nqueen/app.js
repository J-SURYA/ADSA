const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/solve', (req, res) => {
    const n = parseInt(req.body.n);
    const solutions = solveNQueens(n);
    res.render('solutions', { solutions, n });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

function solveNQueens(n) {
    const solutions = [];

    function isSafe(board, row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i] === col || board[i] - i === col - row || board[i] + i === col + row) {
                return false;
            }
        }
        return true;
    }

    function backtrack(row, board) {
        if (row === n) {
            solutions.push([...board]);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row] = col;
                backtrack(row + 1, board);
            }
        }
    }

    backtrack(0, Array(n).fill(0));
    return solutions.map(solution => solution.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1)));
}
