function myFunction() {
  var yourName = document.getElementById("myText1").value;
  var partnerName = document.getElementById("myText2").value;
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
  
  document.getElementById("demo").innerHTML = flames[0];
}