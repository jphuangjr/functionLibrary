function almostIncreasingSequence(sequence) {
	var sorted = sequence.slice().sort(function(a,b){
		return a > b;
	});
	console.log(sorted);
	console.log(sequence);
	var moved = [];
	sequence.forEach(function(val) {
		if(sorted.indexOf(val) !== sequence.indexOf(val) || sorted.indexOf(val) !== sorted.lastIndexOf(val)) {
			moved.push(val)
		}
	});
	console.log(moved);

}

almostIncreasingSequence([10,1, 2, 3, 4, 3, 6])