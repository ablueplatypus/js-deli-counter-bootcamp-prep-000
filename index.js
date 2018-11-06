function takeANumber(line) {
 line.push(line.length + 1);
 return  `You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
   return 'There is nobody waiting to be served!';
}
return `Currently serving ${katzDeliLine.shift()}.`;
}
nowServing(katzDeliLine);

function currentLine(line) {

if (line.length === 0) {
 return 'The line is currently empty.';
}

var lineNumbersArray = [];
var currentNum = 0;

  for (var i = 0; i < line.length; i++) {
    if (currentNum < line.length) {
	   currentNum++;
    }
    lineNumbersArray.push(currentNum + ". " + line[i]);
  }

return 'The line is currently: ' + lineNumbersArray.join(', ');

}