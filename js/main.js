const rgbValue = document.getElementById('rgb-value');
const colorBox = document.querySelector('.color-box');

// Initialize the game:
// - Generate a random RGB value
const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

const targetColor = rgbValue.innerText = randomColor();
colorBox.style.backgroundColor = targetColor;

// console.log(randomColor());
// console.log(randomColor());
// console.log(randomColor());



// - Display that value to the player
// - Initialize score to 0

// Displaying colors options:
// - Display 2 random colors and the RGB color in a square
// - Make each color clickable

// Player choosing color 
// - player chooses color, check if it matches the RGB value
// - If yes: Add +1 to score and get new colors
// - If No: color dissapears and user must try again

// Ending game
// - Player must get a score of 5 to win