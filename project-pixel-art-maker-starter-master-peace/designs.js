// Select color input
var gridColor =document.getElementById('colorPicker');
// Select size input
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');
const submitButton = document.getElementById("submitBtn");
const grid = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click' , function(x) { 
    console.log("When the user clicks the submit button");
    grid.innerHTML = " ";
    x.preventDefault();
    makeGrid();
});
//color selected cell
grid.addEventListener('click', function(x) {
    if(x.target.nodeName === 'TD') {
		x.target.style.backgroundColor = gridColor.value; 
		}
});

// Your code goes here!
function makeGrid(x) {
	for(var r = 0; r < gridHeight.value; r++){
		const row = grid.insertRow (0);
		for( var c = 0; c < gridWidth.value; c++){
			row.insertCell (0);
		}
	}
}
