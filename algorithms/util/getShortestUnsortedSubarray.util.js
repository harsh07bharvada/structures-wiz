const { getPatienceSortedList } = require("../sorting/getPatienceSortedList.sort");

const getShortestUnsortedSubarray = nums => {
    
    if(!nums || !Array.isArray(nums)){
        return;
    }
    let copy = Array.from(nums);
    copy.sort((a,b)=>a-b);
    let min = Infinity, max = -Infinity;
    
    for(let i=0;i<nums.length;i++){
        if(copy[i] !== nums[i]){
            min = Math.min(min, i);
            max = Math.max(max, i);
        }
    }
    return max-min + 1 === -Infinity ? 0 : max-min + 1;
};


module.exports.getShortestUnsortedSubarray = getShortestUnsortedSubarray;