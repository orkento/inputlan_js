exports.load = function(layout, callback){
  var fs = require('fs');
  fs.readFile(getLayoutPath(layout), 'utf-8', callback);
};

exports.getData = function(layout){
  var data = NaN;
  var fs = require('fs');
  fs.readFile(getLayoutPath(layout), 'utf-8', function(error, body){
    if(error) data = null;
    else      data = body;
  });
  while(isNaN(data));
  return data;
};

function getLayoutPath(file_name){
  return './layouts/' + file_name + '.html.ejs';
}