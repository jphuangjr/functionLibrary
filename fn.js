var fnLib = {
	allMethods : function() {
		return [
			"removeDupsInArray  [array,isValueObj, key]",
			"toCamelCase  [string]",
			"filter  [target, array]",
			"sort  [array, key, direction (ASC or DES)]",
			"console  [title, variable]",
			"queue [initialData] {methods => enqueue, dequeue, getValues}",
			"binaryCheck [data, valueVar, leftVar, rightVar, target]",
			"memoize  [function]",
			"objToArray",
			"ellipsis"
		];
	},
	removeDupsInArray : function(array, isValueObj, key) {
		if(arguments.length < 1){
			return "Arguments: [array, isValueObj, key]";
		}
		var lib  = {};
		var result = [];
		if (isValueObj) {
			array.forEach(function(value) {
				if (!lib[value[key]]) {
					lib[value[key]] = value;
					result.push(value);
				}
			});
		} else {
			array.forEach(function(value) {
				if (!lib[value]) {
					lib[value] = value;
					result.push(value);
				}
			});
		}
		return result;
	},
	toCamelCase : function(string) {
		if(arguments.length < 1){
			return "Arguments: [string]";
		}
		var arr = string.toLowerCase().replace(/([~!@#$%^&*()_+=`{}\[\]\|\\:;'<>,.\/? ])+/g, "-").replace(/^(-)+|(-)+$/g,"").split("");
		arr.forEach(function(value, i) {
			if (value === "-") {
				arr.splice(i,1);
				arr[i] = arr[i].toUpperCase();
			}
		});
		return arr.join("");
	},
	filter : function(arr, filter){
		var re = new RegExp(filter,  "i");
		return arr.filter(function(value) {
			return re.test(value);
		})
	},
	sort: function(array, key, dir){
		if(arguments.length < 1){
			return "Arguments: [array, key, direction (ASC or DES)]";
		}
		var directions = {
			ASC: 1,
			DES: -1
		}
		return array.sort(function(a, b){
			var akey = a;
			var bkey = b;
			if(key){
				akey = a[key];
				bkey = b[key];
			}
			if(akey < bkey){
				return (-1 * directions[dir]);
			} else if(akey > bkey){
				return (1 * directions[dir]);
			} else {
				return 0;
			}
		})
	},
	console: function(title, variable) {
		if(arguments.length < 1){
			return "Arguments: [title, variable]";
		}
		console.log(" \n******************* [ " + title + " ] ****************** \n", variable);
	},
	queue: function(initialData) {
		return {
			arr: initialData || [],
			enqueue: function(stuff){
				this.arr.push(stuff);
			},
			dequeue: function(){
				return this.arr.shift();
			},
			getValues: function(){
				return this.arr;
			}
		}
	},
	coinFlip: function() {
		if (Math.random() * 100 <= 50 ) {
			return true;
		} else {
			return false
		}
	},
	each : function(arr, iterator) {
		if (Array.isArray(arr)) {
			arr.forEach(function (value, i, collection) {
				iterator(value, i, collection)
			})
		} else {
			for (var key in arr) {
				iterator(arr[key], key, arr);
			}
		}
	},
	binaryCheck : function(data, valueVar, leftVar, rightVar, target){
		if(data[valueVar] == target){
			return true;
		} else if (data[valueVar] > target && !!data[leftVar]) {
			return binaryCheck(data[leftVar], valueVar, leftVar, rightVar, target);
		} else if(data[valueVar] < target && !!data[rightVar]){
			return binaryCheck(data[rightVar], valueVar, leftVar, rightVar, target);
		} else {
			return false;
		}
	},
	memoize : function(func){
		var cache = {};
		return function(key) {
			if (key in cache) {
				return cache[key];
			} else {
				return cache[key] = func.apply(this, arguments);
			}
		};
	},
	objToArray : function(obj, returnKey, returnTuple, returnArrayOfObj) {
	    var result = [];
	    for(var key in obj){
	        if(!returnTuple && !returnKey){
	            result.push(obj[key]);   
	        } else if(!returnTuple && returnKey){
	            result.push(key);
	        } else if(!returnTuple && returnArrayOfObj){
	            result.push([key,obj[key]])
	        } else {
	            result.push({key: key, value: obj[key]});
	        }
	    } 
	    return result;
	},
	ellipsis : function(word, limit){
		return word.slice(0, limit) + "...";
	}

};

module.exports = fnLib;