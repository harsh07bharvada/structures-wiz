const getMaximumProductSubarray = (list, isDebuggerOn = false) => {
    if (!list || !Array.isArray(list)) {
        if (isDebuggerOn) {
            console.log('Invalid input!');
        }
        return 0;
    }
    let currentMaxProd = list[0],
        currentMinProd = list[0],
        prevMaxProd = list[0],
        prevMinProd = list[0],
        ans = list[0];
    for (let i = 1; i < list.length; i++) {
        currentMaxProd = Math.max(list[i], list[i] * prevMaxProd, list[i] * prevMinProd);
        currentMinProd = Math.min(list[i], list[i] * prevMaxProd, list[i] * prevMinProd);
        ans = Math.max(ans, currentMaxProd);
        if (isDebuggerOn) {
            console.log('CurrentMaxProd:',currentMaxProd,'CurrentMinProd:',currentMinProd,'Current Ans:',ans);
        }
        prevMinProd = currentMinProd;
        prevMaxProd = currentMaxProd;
    }

    return ans;
}


module.exports.getMaximumProductSubarray = getMaximumProductSubarray;