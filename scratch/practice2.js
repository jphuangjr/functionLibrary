//var spacify = function(word){
//	return word.split("").map(function(val, i){
//		return val == " " ? val : (i == word.length-1 ? val : val + " ");
//	}).join("");
//};
////console.log(spacify('hello world'));
//
//Object.prototype.spacify = spacify;
//
//function log(msg) {
//	var args = Array.prototype.slice.call(arguments);
//	args.unshift("(app)");
//	console.log.apply(this, args);
//}
//
//log("hello", "world", "test")

//var reduce = function(collection, iterator, accumulator){
//	var sum;
//	if(!accumulator) {
//		sum = collection.shift();
//	} else {
//		sum = accumulator;
//	}
//	collection.forEach(function(val){
//		sum = iterator(sum, val)
//	});
//	return sum;
//}
//
//var map = function(collection, iterator) {
//	var result = [];
//	collection.forEach(function(val){
//		result.push(iterator[val]);
//	})
//	return result;
//}
//
//var reduce = function(collection, iterator, accumulator){
//	var sum;
//	if(!accumulator) {
//		sum = collection.shift();
//	} else {
//		sum = accumulator;
//	}
//	collection.forEach(function(val){
//		sum = iterator(sum, val)
//	})
//	return sum
//
//}

var taskManager = function(number) {
	this.limit = number;
	this.allTasks = [];
	this.executing = [];
};

taskManager.prototype.push = function(newTask) {
	if(this.executing.length <= this.limit) {
		this.executing.push(newTask(this.finish));
	} else {
		this.allTasks.push(newTask);
	}
};
taskManager.prototype.finish = function() {
	console.log(this);
};

var task1 = function(cb){
	setTimeout(cb, 1000);
}

var test = new taskManager(3);
test.push(task1);

