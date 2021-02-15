const getNumberOfBalancedBinaryTrees = (h = 0) => {
    if (h === 0 || h === 1)
        return 1;

    let dp = Array(h + 1);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= h; i++) {
        dp[i] = (dp[i - 1] * (2 * dp[i - 2] + dp[i - 1])) % 1000000007;
    }
    return dp[h];
}

module.exports.getNumberOfBalancedBinaryTrees = getNumberOfBalancedBinaryTrees;