let numSquare = 12;
let count = 0;
let color = generateRandomColor(numSquare)
let pickedColor = pickColor();
let colorInfo = document.getElementById("colorInfo");
let squares = document.getElementsByClassName("square");
let messageDisplay = document.getElementById("messageInfo");
let modeButton = document.getElementsByClassName("mode");
let resetButton = document.getElementById("reset");
let h1 = document.getElementById("header")
let colorDetail = document.getElementById("colorDetail");

//Dynamic Color Choosen Message
colorInfo.innerText = pickedColor;
modeButton.textContent = "Hard";

for (let i = 0; i < squares.length; i++){
    //Give different color on each square
    squares[i].style.backgroundColor = color[i];
    //Add event listener for the each square
    squares[i].addEventListener("click", function(){
        //Variable to store the background color of the square
        let clickedSquare = squares[i].style.backgroundColor;
        //Condition when the event occur
        if (clickedSquare === pickedColor){
            if (count < 3){
                messageDisplay.textContent = "You are a Awesome Designer"
            } else {
                messageDisplay.textContent = "You need to play more with colors"
            }
            changeColor(clickedSquare);
            h1.style.backgroundColor = clickedSquare;
            colorDetail.textContent = clickedSquare;
            resetButton.textContent = "Play Again?"
        } else {
            squares[i].style.backgroundColor = "#232323"
            messageDisplay.textContent = "Try Again!"
            count++
            colorDetail.textContent = clickedSquare;
        }
    })

}

for(let i = 0; i < modeButton.length; i++){
    modeButton[i].addEventListener("click", function(){
        modeButton[0].classList.remove("selected");
        modeButton[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent == "Easy" ? numSquare = 4: numSquare = 12;
        reset();
    });
}

function changeColor(color){
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor () {
    let random = Math.floor(Math.random() * color.length);
    return color[random]
}

function generateRandomColor (numSquare) {
    //Store color in array
    let colorArr = []
    //Generate color for each value
    for (let i = 0; i < numSquare; i++){
        colorArr.push(randomColor());
    }
    //Return the color generated
    return colorArr
}

function randomColor (){
    //Generate red component
    let r = Math.floor(Math.random()*256);
    //Generate green component
    let g = Math.floor(Math.random()*256);
    //Generate blue component
    let b = Math.floor(Math.random()*256);
    
    return `rgb(${r}, ${g}, ${b})`;
}

function reset (){
    //Generate New Color
    color = generateRandomColor(numSquare);
    //Change the Pick Color
    pickedColor = pickColor();
    //Change the color information when click
    colorInfo.innerText = pickedColor;
    //Implement New Color in the squares
    for (let i = 0; i < squares.length; i++){
        if (color[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = color[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    //Keep the text with the default condition
    resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
    count = 0;
    h1.style.backgroundColor = "steelblue";
    colorDetail.textContent = "";
}

// For the Year Creation
let date = new Date().getFullYear();
document.getElementById("year").innerHTML = `${date} by Greg`;