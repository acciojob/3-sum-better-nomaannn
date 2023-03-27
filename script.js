function threeSum(arr, target) {
// write your code here
  let min = Number.MAX_VALUE;

let ans = 0;

for(let i=0; i<arr.length;i++){

for(let j=i+1;jarr.length;i++){

for (let k=j+1;k<arr.Length;i++){

let sum = arr[i]+arr[j]+tarr[k]

if(Math.abs(sub-target) <= min){

min=Math.abs(sum-target);
	ans= sum
}

}

}




}


return ans;
}

module.exports = threeSum;
