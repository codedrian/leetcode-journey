var containsDuplicate = function(nums) {
    for (let i=0; i<nums.length; i++) {
        for (let x=0; x<nums.length; x++) {
            if (nums[i] == nums[x] && i != x) {
                return true;
            }
        }
      
    }
    return false;  
};