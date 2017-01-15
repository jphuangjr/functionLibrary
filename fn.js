var fnLib = {
	allMethods : function() {
		return ["removeDupsInArray", "toCamelCase", "filter", "sort", "betterConsole"];
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
	filter : function(target , array){
		if(arguments.length < 1){
			return "Arguments: [target, array]";
		}
		var val = '^(?=.*\\b' + target.trim().split(/\s+/).join('\\b)(?=.*\\b') + ').*$';
		var reg = RegExp(val, 'i');
		var results = [];
		array.forEach(function(value){
			if(reg.test(value)){
				results.push(value)
			}
		});
		return results;
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
	betterConsole: function(title, variable) {
		if(arguments.length < 1){
			return "Arguments: [title, variable]";
		}
		console.log(" \n******************* [ " + title + " ] ****************** \n", variable);
	},
	queue: function() {
		return {
			arr: [],
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
	}
};