let nums = [3, 3, 2, 2];
let val = 3;
let j = 0;

for (let n of nums) {
        if (n !== val) {
            nums[j++] = n;
            console.log(j);

        }

    }
 console.log(nums);
