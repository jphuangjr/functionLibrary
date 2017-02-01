var data = [{"Welp":[{".NET v2.1":[{"ci_path":["connectivity","w","o:y"],"check_type":"connectivity","connectivity":{"port":"y","protocol":"w","host":"o"},"name":"A w connection to o on port y should return the specified values","checks":{"present":[{"expected":"true","check":"equals"},{"cond":[{"op":">","val":"0.9"}],"check":"regex","expected":"(.*)"}]}},{"ci_path":["GroupPolicy","*","sss"],"check_type":"grouppolicy","GroupPolicy":{"name":"sss"},"name":"The group policy object sss should have the defined properties","checks":{"present":[{"expected":"true","check":"equals"}]}},{"ci_path":["packages","*","sss"],"check_type":"packages","packages":{"name":"sss"},"name":"The package sss should be installed.","checks":{"present":[{"expected":"true","check":"equals"}]}}]},{".NET 3.0":[{"ci_path":["connectivity","w","w:e"],"check_type":"connectivity","connectivity":{"port":"e","protocol":"w","host":"w"},"name":"A w connection to w on port e should return the specified values","checks":{"present":[{"expected":"true","check":"equals"},{"cond":[{"op":">","val":"0.01"}],"check":"regex","expected":"(.*)"},{"cond":[{"op":">","val":"0.9"}],"check":"regex","expected":"(.*)"}]}},{"ci_path":["packages","*","ww"],"check_type":"packages","packages":{"name":"ww"},"name":"The package ww should be installed.","checks":{"present":[{"expected":"true","check":"equals"}]}},{"ci_path":["files","*","nomeu"],"check_type":"files","files":{"path":"nomeu"},"name":"The file nomeu should have the defined properties","checks":{"present":[{"expected":"true","check":"equals"}]}}]},{".N":[{"ci_path":["etcd_keys","*",null],"check_type":"etcd_keys","etcd_keys":{"name":null},"name":"An etcd key/keys at aa should contain the specified values","checks":{"present":[{"expected":"true","check":"equals"}]}}]}]},{"done":[{"ci_path":["files","*","C:\\Users\\aj\\Desktop\\testing.txt"],"check_type":"files","files":{"path":"C:\\Users\\aj\\Desktop\\testing.txt"},"name":"The file C:\\Users\\aj\\Desktop\\testing.txt should have the defined properties","checks":{"present":[{"expected":"true","check":"equals"}]}}]}];

var recursion = function(data, object) {
	if(Array.isArray(data)){
		data.forEach(function(value){
			if(typeof value !== "string"){
				for(key in value){
					if(key === "name"){
						object[key] = value[key]
					} else if(typeof value[key] !== "string"){
						object[key] = recursion(value[key], {})
					}
				}
			} else {

			}
		})
	} else if(typeof data === "object"){
		for(var key2 in data) {
			object[key2] = data[key2];
		}
	}
	return object;
}

console.log(recursion(data, {}))