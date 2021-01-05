const getMergeSortedList = (list, isDebuggerOn )=> {
    if (!list || !Array.isArray(list)) {
        if(isDebuggerOn){
            console.log('Invalid Input');
        }
        return [];
    }
    const merge = (left, right) => {
        let res = [];
        if(isDebuggerOn){
            console.log('Merging-',left,' & ',right);
        }
        while (left.length && right.length) {
            if (left[0] < right[0]) {
                res.push(left.shift());
            } else {
                res.push(right.shift());
            }
        }
        if(isDebuggerOn){
            console.log('After Merging-',[...res, ...left, ...right]);
            console.log("---------------------------------------")
        }
        return [...res, ...left, ...right];
    }
    const mergeSort = (list) => {
        if (list.length > 1) {
            const mid = Math.floor(list.length / 2);
            const left = mergeSort(list.slice(0, mid));
            const right = mergeSort(list.slice(mid));
            return merge(left, right);
        }
        return list;
    }
    return mergeSort(list);
}

module.exports.getMergeSortedList = getMergeSortedList;