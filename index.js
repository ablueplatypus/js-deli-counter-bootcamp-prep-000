function takeANumber(line, name) {

var count = 0;
line.push(name);

for (var i = 0; i < line.length; i++) {
  if (line.length > count) {
     count++
 }
 
}

return `Welcome, ${name}. You are number ${count} in line.`;
}




function currentLineMine(line) {

if (line.length === 0) {
 return 'The line is currently emtpy.'
}

var lineNumbersArray = [];
var currentNum = 0;

  for (var i = 0; i < line.length; i++) {
   if (currentNum < line.length) {
	currentNum++;
   }
lineNumbersArray.push(currentNum + "." + line[i]);
  }

return 'The line is currently: ' + lineNumbersArray.join(', ');

}