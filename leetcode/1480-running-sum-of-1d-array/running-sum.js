let runningSum = function (nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
    total = total + nums[i];
    nums.splice(i, 1, total);
}
return nums;
};
