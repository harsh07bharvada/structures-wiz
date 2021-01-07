const isSortedList = (list, isDebuggerOn) => {
    if (!list || (list && !Array.isArray(list))){
        if(isDebuggerOn){
            console.log("Invalid input");
            return;
        }
    }
    
    let isSorted = true;
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] > list[i + 1]){
            if(isDebuggerOn){
                console.log(`Invalid comparision at ${i} and ${i+1} indices with values comparing - ${list[i]} and ${list[i+1]}`);
            }
            isSorted = false;
            break;
        }
    }
    if(isDebuggerOn){
        console.log(" List is sorted");
    }
    return isSorted;
}

module.exports.isSortedList = isSortedList;