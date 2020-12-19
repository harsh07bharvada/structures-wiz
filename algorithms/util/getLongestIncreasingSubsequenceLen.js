const getLongestIncreasingSubsequenceLen = nums => {

    if (!nums || !Array.isArray(nums)) {
        return 0;
    }
    if (nums.length <= 1)
        return nums.length;

    let buckets = [nums[0]];

    const binarySearch = val => {
        let low = 0,
            high = buckets.length - 1;
        while (low < high) {

            const mid = low + Math.floor((high - low) / 2);
            if (buckets[mid] < val)
                low = mid + 1;
            else
                high = mid;
        }
        return low;
    }

    for (let i = 1; i < nums.length; i++) {
        if (buckets[buckets.length - 1] < nums[i]) {
            buckets.push(nums[i]);
        } else {
            const index = binarySearch(nums[i]);

            buckets[index] = nums[i];
        }

    }
    return buckets.length;
};

module.exports.getLongestIncreasingSubsequenceLen = getLongestIncreasingSubsequenceLen;