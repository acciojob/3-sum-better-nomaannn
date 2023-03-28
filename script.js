function threeSum(arr, target) {
// write your code here
  let min = Number.MAX_VALUE;

let ans = 0;

for (let i = 0; i < arr.length-2; i++) {
	for (let j = i+1; j < arr.length-1; j++) {
		for (let k = j+1; k < arr.length; k++) {
			if(Math.abs(arr[i]+arr[j]+arr[k])<=target){
				 let minus = Math.abs(arr[i]+arr[j]+arr[k]) - target;
				if(minus<min){
					min = minus;
				}
			}
		}
	}
}


return min;
}

module.exports = threeSum;
