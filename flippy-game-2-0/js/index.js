var gameNumbers = [];
var rowValues = [];
var rowBombs = [];
var colValues = [];
var colBombs = [];
var keyColors = ["pink","green","yellow","blue","purple"];
var score=1;

// build and populate the table
function createGameGrid() {
  
  for(i = 0; i < 25; i++){
  var randomNum = Math.floor(Math.random() * 4);
  if(randomNum > 3){ randomNum = 1; }
  gameNumbers[i] = randomNum;
}

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

  
  var body = document.body,
      tbl = document.createElement("table");
  
// DRAW THE BASIC GRID  
    for (var i = 0; i < 25; i+=5) {
      var tr = tbl.insertRow();
      for(var k=0;k<5;k++){
        var td = tr.insertCell();
        $(td).addClass("card");
        td.appendChild(document.createTextNode(gameNumbers[i+k]));        
      }
      // DRAW THE KEY ROW AND VALUES
      var td = tr.insertCell();
      $(td).addClass(keyColors[i/5]);
      $(td).append('<div class="top '+keyColors[i/5]+'_dark">'+rowValues[i/5]+'</div><div class="key">'+rowBombs[i/5]+"<i class='fas fa-exclamation-circle keybomb'></i></div>");
  }
  // DRAW THE KEY COLUMN AND VALUES
  var tr = tbl.insertRow();
  for(var k=0;k<5;k++){
        var td = tr.insertCell();
        $(td).addClass(keyColors[k]);
        $(td).append('<div class="top '+keyColors[k]+'_dark">'+colValues[k]+'</div><div class="key">'+colBombs[k]+"<i class='fas fa-exclamation-circle keybomb'></i></div>");     
      }
  body.appendChild(tbl);
}

createGameGrid();

$("td").click(function() {
  //update score only if tile has not been flipped
  if (!$(this).hasClass("flipped")) {
    score*=$(this).text();
    $(".scoreNum").text(score);
  }
  // if you choose a 0, make a bomb
  if($(this).text() == 0){
    $(this).addClass("bomb");
    $(this).removeClass("card");
    $(this).text("");
    $(this).append("<i class='fas fa-exclamation-circle'></i>"); 
  } else {
    // otherwise flip the card
    $(this).addClass("flipped");
    $(this).removeClass("card");
  }
});

// DRAWS NEW GRID BUT NEW GRID DOESN'T WORK?
$(".replay").click(function() {
  score=1;
  $(".scoreNum").text(0);
});
