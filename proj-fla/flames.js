function calculateFlames(yourName, partnerName) {
  var name1 = yourName.toLowerCase().replace(/[^a-z]/g, '');
  var name2 = partnerName.toLowerCase().replace(/[^a-z]/g, '');
  
  var flames = ['Friends', 'Lovers', 'Attraction', 'Marriage', 'Enemies', 'Siblings'];
  
  for (var i = 0; i < name1.length; i++) {
    for (var j = 0; j < name2.length; j++) {
      if (name1[i] === name2[j]) {
        name1 = name1.replace(name1[i], '');
        name2 = name2.replace(name2[j], '');
        i--;
        break;
      }
    }
  }
  
  var count = name1.length + name2.length;
  
  while (flames.length > 1) {
    var index = (count % flames.length) - 1;
    if (index >= 0) {
      flames = flames.slice(index + 1).concat(flames.slice(0, index));
    } else {
      flames = flames.slice(0, flames.length - 1);
    }
  }
  
  return flames[0];
}

// Read user input from the console
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your name: ", function(yourName) {
  rl.question("Enter your partner's name: ", function(partnerName) {
    var result = calculateFlames(yourName, partnerName);
    document.write(result);
    rl.close();
  });
});
