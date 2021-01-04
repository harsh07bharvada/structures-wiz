const isSortedList = list => {
    if (!list || (list && !Array.isArray(list)))
        return;
    let isSorted = true;
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] > list[i + 1]){
            isSorted = false;
            break;
        }
    }
    return isSorted;
}

module.exports.isSortedList = isSortedList;