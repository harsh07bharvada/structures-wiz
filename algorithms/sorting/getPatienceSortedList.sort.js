const getPatienceSortedList = (list, isDebuggerOn = false) => {
    if (!list || !Array.isArray(list)) {
        return;
    }
    if (list.length <= 1)
        return list;

    let allStacks = [], res = [];

    if(isDebuggerOn){
        console.info(`Creating Stacks starting...`);
    }
    for (let i = 0; i < list.length; i++) {

        let inserted = false;

        for (let j = 0; j < allStacks.length; j++) {

            if (allStacks[j] && allStacks[j][allStacks[j].length - 1] >= list[i]) {

                if(isDebuggerOn){
                    console.log('State:',allStacks);
                }
                allStacks[j].push(list[i]);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            if(isDebuggerOn){
                console.info('State:',allStacks);
            }
            allStacks[allStacks.length] = [list[i]];
        }

    }

    if(isDebuggerOn){
        console.info(`Creating Stacks ended...`);
        console.info(`Obtaining lowest values from the top of all the stacks begins...`);
    }
    while (allStacks.length > 0) {
        let min = 999999, minIndex = -1;
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
        if(isDebuggerOn){
            console.info('Current State of Result:',res);
            console.info('Current State of stacks: ',allStacks);
            console.info('--------------------------------------')
        }
    }
    return res;
}
module.exports.getPatienceSortedList = getPatienceSortedList;