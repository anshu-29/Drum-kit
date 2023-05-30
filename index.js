// event listeners - everytime we click or do any activity on the button it will activate the function
// Detecting Button Press
for(var i=0;i<document.querySelectorAll(".drum").length;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
// WHat to do when the click detected
// It can also be written in format of anonymous function
// document.querySelector("button").addEventListener("click,function() {
// alert("I got Clicked ")});

    function handleClick() {
        // alert("I got Clicked");
        // this-Keyword used to detect the event which is triggered like in this case is the button which is clicked
// console.log(this.innerHTML); //It will print the value of the button that we click on

// this.style.color="white"; //When we will click on button it will turn into


        let buttonInnerHTML = this.innerHTML;
        keyboardTap(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
}
//  Event listener for pressing the keys
document.addEventListener("keypress",function(event) {
    // alert("Key was pressed");
    // console.log(event);
    keyboardTap(event.key);
    buttonAnimation(event.key);
})
function keyboardTap(key) { // IN THE PARANTHESIS KEY IS THE EVENT IT CAN BE KNOWN AS E OR EVT OR EVENT

    switch (key) {
        case "W":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "A":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "S":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "D":
            var tom4 = new Audio('sounds/tom-4.mp3');

            tom4.play();
            break;

        case"J":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "K":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "L":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        default :
            console.log(button.innerHTML);
    }
}
//animation
function buttonAnimation(currentKey) {


    var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);
}
// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();





// Example of Higher order functions
// calculator-
// function add(num1,num2){
//     return num1+num2;
//
// }
// function multiply(num1,num2){
//     return num1*num2;
// }
// function subtract(num1,num2){
//     return num1-num2;
//
// }
// function divide(num1,num2){
//     return num1/num2;
// }
// function calculator(num1,num2,operator)
// {
//     return operator(num1,num2);
//
// }

// calculator(4,5,multiply)

// debugger; - it is used to debug the function in the console
