function fibs( n ) {
    if(n === 0) return [0];
    if(n === 1) return [0, 1];
    
    const nums = fibs(n-1);
    nums.push(nums[nums.length - 1] + nums[nums.length - 2])
    return nums
}
console.log(fibs(8))


