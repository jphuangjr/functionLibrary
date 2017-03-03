var _ = require("../fn");

var findLoopNumber = function(node) {
  var counter = 0;
  var recursion = function(n){
  	if(n.value) {
  		return counter + 1 - n.value;
  	} else {
  		counter++
  		n.value = counter;
  		console.log(n)
  		return recursion(n.next)
  	}
  }
  return recursion(node);
}

var node5 = {}
var node4 = { next: node5 }
var node3 = { next: node4 }
var node2 = { next: node3 }
var node = { next: node2 }
node5.next = node3;

var result = findLoopNumber(node);
console.log(result)