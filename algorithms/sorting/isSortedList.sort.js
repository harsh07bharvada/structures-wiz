const isSortedList = (list, comparator , isDebuggerOn = false) => {
    if (!list || (list && !Array.isArray(list))){
        if(isDebuggerOn){
            console.info("Invalid input");
            return;
        }
    }
    if(typeof comparator !== "function"){
        if(isDebuggerOn){
            console.warn("Second Argument wasn't a comparator so default ascending order comparator will be used");
        }
        comparator = (a,b) => a - b;
    }
    let isSorted = true;
    for (let i = 0; i < list.length - 1; i++) {
        if (comparator(list[i], list[i+1]) > 0 ){
            if(isDebuggerOn){
                console.info(`Invalid comparision at ${i} and ${i+1} indices with values comparing - ${list[i]} and ${list[i+1]}`);
            }
            isSorted = false;
            break;
        }
    }
    if(isDebuggerOn && isSorted){
        console.info("List is sorted");
    }
    return isSorted;
}

module.exports.isSortedList = isSortedList;