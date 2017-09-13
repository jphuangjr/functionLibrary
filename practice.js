var numbers = [51,2,78,345,346,15,100,88,91,5,74];

var sortMethods = {
	insertionSort: function(values) {
		for(var i = 1; i < values.length; i++) {
			var element = values[i]; // 2
			var j = i; // 1
			while(j > 0 && values[j-1] > element) {
				values[j] = values[j-1];
				j = j-1
			}
			values[j] = element;
		}
		console.log(values);
		return values;
	},
	selectionSort: function(values) {
		for(var i= 0; i< values.length; i++) {
			var min = i;
			for(var j=i+1; j<values.length; j++) {
				if(values[j] < values[min]) {
					min = j
				}
			}
			if(values[min] !== values[i]) {
				var temp = values[i];
				values[i] = values[min];
				values[min] = temp;
			}
		}
		console.log(values);
		return values;
	},
	bubbleSort: function(values) {
		var sorted = false;
		while(!sorted) {
			for(var i=0; i<values.length; i++) {
				sorted = true;
				if(values[i] > values[i+1]) {
					var temp = values[i];
					values[i] = values[i+1];
					values[i+i] = temp;
					sorted = false;
				}
			}
		}
		console.log(values);
		return values;
	},
	quickSort: function(values) {
		for(var i=0; i<values.length; i++){
			var pivot = values[values.length-1];
			for(var j=i; j<values.length; j++){
				if(values[j] < pivot){
					var temp = values[j];
					values[j] = values[i];
					values[i] = temp;
				}
			}
		}
	}
}

var linkedLists = {
	singleLL : function() {
		this.head = null;
		this.next = null;
		this.addNode = function(value) {
			if(!this.head) {

			}
			while(this.next) {

			}
		}
		this.isEmpty = function() {
			return !this.head;
		}
	}
}


//sortMethods.insertionSort(numbers);
//sortMethods.selectionSort(numbers);
//sortMethods.bubbleSort(numbers);


Array.prototype.fourEach = function(callback) {
	for(var i=0; i<this.length; i++){
		callback(this[i]);
	}
};

Object.prototype.fourEach = function(callback) {
	console.log(this)
	for(var key in this){
		console.log(this[key])
		callback(this[key]);
	}
};

var test = [1,2,3];

//test.fourEach(function(val){
//	console.log(val*2);
//});

var lol = {key: "josh", key2: "jeff"};

lol.fourEach(function(val){
	//console.log(val + "lolzer")
})