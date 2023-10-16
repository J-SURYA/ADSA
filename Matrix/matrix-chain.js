function matrixChainMultiplication(p) {
    const n = p.length - 1;
    const m = new Array(n).fill().map(() => new Array(n).fill(0));
    const s = new Array(n).fill().map(() => new Array(n).fill(0));

    for (let l = 2; l <= n; l++) {
        for (let i = 0; i < n - l + 1; i++) {
            const j = i + l - 1;
            m[i][j] = Number.MAX_VALUE;
            for (let k = i; k < j; k++) {
                const q = m[i][k] + m[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                if (q < m[i][j]) {
                    m[i][j] = q;
                    s[i][j] = k;
                }
            }
        }
    }

    return { minScalarMultiplications: m[0][n - 1], s };
}

function printOptimalParenthesization(s, i, j) {
    if (i === j) {
        return `A${i + 1}`;
    }
    return `(${printOptimalParenthesization(s, i, s[i][j])} * ${printOptimalParenthesization(s, s[i][j] + 1, j)})`;
}

module.exports = { matrixChainMultiplication, printOptimalParenthesization };
