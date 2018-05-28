const fs = require('fs');
const args = process.argv.slice(2);
const file = args[0];
fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/;/g, ';');

  fs.writeFile(file, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

