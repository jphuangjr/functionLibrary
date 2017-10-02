function checkPalindrome(inputString) {
	var isPalindrome = true;
	var arr = inputString.split("");
	var stats = {
		left: 0,
		right: arr.length - 1
	}
	var even = (arr.length % 2 == 0);
	if(even) {
		while(stats.left <= (arr.length-1) / 2) {
			if(arr[stats.left] != arr[stats.right]) {
				isPalindrome = false;
			};
			stats.left++;
			stats.right--;
		}
	} else {
		while(stats.right !== stats.left) {
			if(arr[stats.left] != arr[stats.right]) {
				isPalindrome = false;
			};
			stats.left++;
			stats.right--;
		}
	}
	return isPalindrome;
}

checkPalindrome("caaabbbaaca")