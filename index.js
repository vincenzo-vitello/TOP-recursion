// Fibonacci sequence using recursion
function fibs( n ) {
    if(n === 0) return [0];
    if(n === 1) return [0, 1];
    
    const nums = fibs(n-1);
    nums.push(nums[nums.length - 1] + nums[nums.length - 2]);

    return nums
}
console.log(fibs(8))

// Merge Sort
function mergeSort(arr) {
    //this function takes and array and splits it in two until we have single elements array.
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    //then we call merge
    return merge(left, right);
}

function merge(left, right) {
    // this function take two given arrays and foreach element of them, it compares the elements and then pushes the smaller element into an auxiliar array. 
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    // after sorting the elements, the functions merges the sorted elements into the auxiliar array and returns it
    return result.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log('Given arr: ', arr)
console.log('Sorted arr: ',mergeSort(arr));