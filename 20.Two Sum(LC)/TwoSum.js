// Two number sum of same array. given a atrget number we have to check whether the sum of any two number in the array is equal to the target element or not
function twoSum(nums, target) {
    const IndexMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (IndexMap.has(complement)) {
            return [IndexMap.get(complement), i];
        }

        IndexMap.set(nums[i], i);
    }

    return null;
}

const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log("Example 1:");
console.log("Input: nums = [2, 7, 11, 15], target = 9");
console.log("Output:", twoSum(nums1, target1));