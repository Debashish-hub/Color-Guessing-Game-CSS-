var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors= generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none"; 
		}
	}
});
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors= generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];	
		squares[i].style.display = "block"; 
		
	}
});

resetButton.addEventListener("click" , function () {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New colors"
	//change colors of squares
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
})

for(var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;

		//compare color to picked color
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again"
			changecolors(clickedColor);
			h1.style.background = pickedColor;
		}else{
			this.style.background = "#232323"
			messageDisplay.textContent = "Try again";
		}
	});
}

function changecolors(color){
	//loop through all squares
	for (var i = 0; i < colors.length; i++) {
		//change color to match given color
		squares[i].style.background = color;
	}

}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	// body...
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = []
	//add num random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
	// body...
}

function randomColor() {
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a blue
	var b = Math.floor(Math.random() * 256);
	//pick a green
	var g = Math.floor(Math.random() * 256);
	//"rgb(r,g,b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
	// body...
}
