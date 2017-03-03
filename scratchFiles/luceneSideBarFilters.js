var _ = require("../fn");
// console.log(_.allMethods());

var options = {
	query: 'severity:["3", "1"] and eventAction:"Create"'
};
var getQuery = function(options, groupKey, name){
	var categories = {};
	if(options.query.length < 1){
		return {severity: [], eventAction: []};
	}
	var cats = options.query.replace(/\s/g, '').split("and");
	cats.forEach(function(cat, i) {
		categories[cats[i].split(":")[0]] = (typeof JSON.parse(cats[i].split(":")[1]) === "string" ? [JSON.parse(cats[i].split(":")[1])] : JSON.parse(cats[i].split(":")[1]));
	})

	return categories;
}


var query = getQuery(options);
console.log(query);

createQuery = function(qObj){
	var string = ""
	for(var key in qObj){
		string += (key + ":" + JSON.stringify(qObj[key]) + " and ");
	}
	string = string.slice(0, string.length-5);
	return string;
}

createQuery(query);

// var obj2 = {
// 	"Event Severity" : [{count: 1355, groupKey:"severity", name:"3"},{count: 20, groupKey:"severity", name:"4"}],
// 	"Event Types" : [{groupKey:"eventAction", name:"Create"},{groupKey:"eventAction", name:"Delete"}]
// }

// var filter = function(query, data){
// 	var final = {};
// 	for(var key in data){
// 		final[key] = data[key].filter(function(val){
// 			return (query[val.groupKey].indexOf(val.name) < 0)
// 		})
// 	}
// 	return final;
// }

// var lol = filter(query, obj2);

// _.console("FINAL", lol)