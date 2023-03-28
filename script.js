function threeSum(arr, target) {
// write your code here
  let min = Number.MAX_VALUE;

let ans = 0;

for (let i = 0; i < arr.length-2; i++) {
	for (let j = i+1; j < arr.length-1; j++) {
		for (let k = j+1; k < arr.length; k++) {
			if(arr[i]+arr[j]+arr[k]>=target){
				 ans = arr[i]+arr[j]+arr[k] - target;
				if(ans<min){
					min = ans;
				}
			}
		}
	}
}


return ans;
}

module.exports = threeSum;
