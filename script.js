function threeSum(arr, target) {
// write your code here
  let min = 0;

let ans = 0;

for (let i = 0; i < arr.length-2; i++) {
	for (let j = i+1; j < arr.length-1; j++) {
		for (let k = j+1; k < arr.length; k++) {
			if(arr[i]+arr[j]+arr[k]>=target){
				 min = arr[i]+arr[j]+arr[k] - target;
				if(ans<min){
					ans = min;
				}
			}
		}
	}
}


return ans;
}

module.exports = threeSum;
