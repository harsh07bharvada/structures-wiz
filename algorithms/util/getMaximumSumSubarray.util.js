const getMaximumSumSubarray = list => {
    if (!list || !Array.isArray(list))
        return 0;

    let negCount = 0,
        largestNeg = -Infinity,
        sum = 0,
        ans = -Infinity;
    for (let i = 0; i < list.length; i++) {
        if (list[i] < 0) {
            negCount++;
            largestNeg = Math.max(largestNeg, list[i]);
        }
        if (sum + list[i] < 0) {
            sum = 0;
        } else {
            sum += list[i];
        }
        ans = Math.max(ans, sum);
    }
    if (negCount === list.length)
        return largestNeg;
    return sum;
}

module.exports.getMaximumSumSubarray = getMaximumSumSubarray;