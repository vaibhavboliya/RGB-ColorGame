numSquare = 6
var colors =[];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode")
    


init();
function init(){  
    setupModeButton();
    setupsquare();
    resetgame();
    console.log(pickedColor);
    
}
        
            //*************************** Mode*******************************
function setupModeButton(){
    for(var i = 0; i< mode.length;i++){
        mode[i].addEventListener("click",function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "EASY" ? numSquare = 3: numSquare = 6;
            resetgame();
        })

    }

}

function setupsquare(){
    for(var i = 0; i<squares.length;i++)
    {  
        squares[i].addEventListener("click",function(){
            // grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedcolor
            if (clickedColor === pickedColor)
            {
                message.textContent = "You Won";
                reset.textContent = "PLAY AGAIN ?";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;

            } else {
                this.style.backgroundColor = "azure";
                message.textContent = "try Again";
            }
        })

    }

}

    //*************************** reset*******************************
function resetgame(){
    colors = generateRandomcolors(numSquare);
        //pick a new random color
    pickedColor = pickColor();
        //change color to match the color 
    colorDisplay.textContent = pickedColor;
    reset.textContent = "New colors";
        // message set to none
    message.textContent = "";
    for(var i = 0; i<squares.length;i++){   
        if(colors[i]){ 
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];

        }
        else{
            squares[i].style.display = "none";
        }
            
    }
        // h1 color change
    h1.style.backgroundColor = "steelblue";
}

        // for reseting the game
        reset.addEventListener("click",function(){
            resetgame();
        });


        //***************************generate random colors of RGB COLOR*******************************


function randomColor(){
    var r = Math.floor(Math.random() *256);
    var g = Math.floor(Math.random() *256);
    var b = Math.floor(Math.random() *256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}

 //*************************** store random color in array*******************************
 function generateRandomcolors(num){
    var arr = [];

    for(var i = 0; i <num ;i++){
        arr.push(randomColor())
    }

    return arr;
}

 //***************************pick random color from given colors*******************************
 function pickColor(){
    var random = Math.floor(Math.random() * colors.length ) ;
    console.log(random);
    return colors[random];

}
 //***************************sets the colors of square*******************************
    function changeColor(color){
        // loop through all squares 
        // change each color
        for(var i = 0; i<squares.length; i++)
        {
            squares[i].style.backgroundColor = color;
        }
    }





    