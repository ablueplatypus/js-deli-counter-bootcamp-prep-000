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

