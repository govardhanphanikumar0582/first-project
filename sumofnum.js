var twoSum = function(nums, target) {
    var arr=[];
    for(var i=0; i<nums.length;i++){
        var num=nums[i]+nums[i+1];
        console.log(num)
        if(num==target){
           arr.push(i);
            arr.push(i+1);
            break;
        }
    }
    console.log(arr)
};
var nums=[2,7,11,15];
var target=9;
twoSum(nums,target);