var fs = require('fs');
var jsonData = {"test": "hello"};
fs.writeFile("/Users/jhuang/Projects/functionLibrary/test", JSON.stringify(jsonData), function(err) {
  if(err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});