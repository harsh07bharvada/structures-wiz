const getLongestCommonSubsequenceLen = (text1 = '', text2 = '') => {
    let arr = new Array(text1.length + 1).fill(0);
    for (let i = 0; i < text1.length + 1; i++)
        arr[i] = new Array(text2.length + 1).fill(0)

    for (let i = 1; i < text1.length + 1; i++) {
        for (let j = 1; j < text2.length + 1; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                arr[i][j] = arr[i - 1][j - 1] + 1;
            } else {
                arr[i][j] = Math.max(arr[i - 1][j], arr[i][j - 1]);
            }
        }
    }
    return arr[text1.length][text2.length];
}

module.exports.getLongestCommonSubsequenceLen = getLongestCommonSubsequenceLen;