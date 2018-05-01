var gameNumbers = [];
var rowValues = [];
var rowBombs = [];
var colValues = [];
var colBombs = [];

for(i = 0; i < 25; i++){
  var randomNum = Math.floor(Math.random() * 5);
  if(randomNum > 3){ randomNum = 0; }
  gameNumbers.push(randomNum);
}

// PRINT GRID; TBD
for(i=0;i<25;i++){
  if(i % 5 == 0 && i > 4){ document.write("<br/>"); }
  document.write(gameNumbers[i] + "&nbsp;");
}

document.write("<br/><br/>");


// SUM ROWS
var k=0; 
for(j=0;j<25;j+=5){
  var numBombs = 0;
  var sum = 0;
  for(i=0;i<5;i++){
    sum += gameNumbers[i+j];
    if(gameNumbers[i+j] == 0){ numBombs++ }
  }
  rowValues[k]=sum;
  rowBombs[k]=numBombs;
    k++;
}
// SUM COLUMNS
for(i=0;i<5;i++){
  var numBombs = 0;
  var sum = 0;
  for(j=i;j<25;j+=5){
    sum += gameNumbers[j];
    if(gameNumbers[j] == 0){ numBombs++ }
  }
  colValues[j%5]=sum;
  colBombs[j%5]=numBombs;
}

// CHECK SUM AND BOMB VALUES

for(i=0;i<5;i++){
    document.write("ROW : "+ rowValues[i] +" <b class='bomb-output'>"+rowBombs[i]+"</b>");
    document.write(" &nbsp;&nbsp;COL : "+colValues[i]+" <b class='bomb-output'>"+colBombs[i]+"</b>");
    document.write("<br/>");
    }


// BUILD THE DAMN THING

// build and populate the table
function tableCreate() {
  var body = document.body,
      tbl = document.createElement("table");
  
    for (var i = 0; i < 25; i+=5) {
      var tr = tbl.insertRow();
      for(var k=0;k<5;k++){
        var td = tr.insertCell();
        td.appendChild(document.createTextNode(gameNumbers[i+k]));
      }
  }
  body.appendChild(tbl);
}

tableCreate();

$(td).onClick