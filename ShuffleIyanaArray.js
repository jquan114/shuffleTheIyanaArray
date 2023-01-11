// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].


var shuffle = function(nums, n) {
        let newArr = [];
        

    for( let i = 0 ; i < n ; i++ ) {
        let x = nums[i];
        let y = nums[i + n];

        newArr.push(x,y)
    }
    return newArr;
};
