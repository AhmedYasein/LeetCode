/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    var first = 0;
    var last = nums.length - 1

    while(first<= last)
    {
    let mid = first + Math.floor((last - first) / 2); 
    console.log(mid);

    if (nums[mid] === target)
    {
        return mid;

    } else if (nums[mid]<target)
    {
        first = mid + 1;
    } else
    {
        last = mid - 1;
    }
    }

    return -1;
};