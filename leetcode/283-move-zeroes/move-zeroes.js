let nums = [0,0,9,6,7];
let nonZeroIndex = 0;

//move zeroes to left
for (let i = nums.length-1; i >= 0; i--) {
    if (nums[i] == 0) {
        console.log("iteration "+i+" ")
        console.log("num[] before is "+nums+" ");
        console.log("The array length before is "+nums.length+"");
        console.log("i is "+i+" ");
        console.log("nums[i] is "+nums[i]+" ");
        nums.splice(i, 1);
        nums.push(0);
        console.log("num[] after is "+nums+" ");
        console.log("The array length after is "+nums.length+"");

        console.log(nums);


    }
    if (nums[i] !== 0) {
        console.log("nums["+nums[i]+"] SKIPPED");
    }
}
