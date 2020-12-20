const getPatienceSortedList = list => {
    if (!list || !Array.isArray(list)) {
        return;
    }
    if (list.length <= 1)
        return list;

    let allStacks = [],
        res = [];
    for (let i = 0; i < list.length; i++) {

        let inserted = false;

        for (let j = 0; j < allStacks.length; j++) {

            if (allStacks[j] && allStacks[j][allStacks[j].length - 1] >= list[i]) {

                allStacks[j].push(list[i]);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            allStacks[allStacks.length] = [list[i]];
        }

    }

    while (allStacks.length > 0) {
        let min = 99999,
            minIndex = -1;
        for (let i = 0; i < allStacks.length; i++) {
            if (allStacks[i][allStacks[i].length - 1] < min) {
                min = allStacks[i][allStacks[i].length - 1];
                minIndex = i;
            }
        }
        res.push(min);
        allStacks[minIndex].pop();
        if (allStacks[minIndex].length === 0) {
            allStacks.splice(minIndex, 1);
        }
    }
    return res;
}
module.exports.getPatienceSortedList = getPatienceSortedList;