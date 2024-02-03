//alert("hey");
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    makeSound(this.innerHTML);

    //buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});

//functions
function makeSound(key) {

  switch (key) {
    case "q":
      var piano = new Audio("sounds/piano.mp3");
      piano.play();
      break;

    case "w":
      var violin = new Audio("sounds/violin.mp3");
      violin.play();
      break;

    case "e":
      var arfa = new Audio("sounds/arfa.mp3");
      arfa.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/crash.mp3');
      snare.play();
      break;

    case "k":
      var sacs = new Audio('sounds/saks.mp3');
      sacs.play();
      break;

    case "l":
      var snare = new Audio('sounds/cool-guitar.wav');
    snare.play();
    break;
  

    case "z":
    var tom3 = new Audio('sounds/acoustic-guitar-long.mp3');
    tom3.play();
    break;

    case "x":
      var crash = new Audio('sounds/bell1.mp3');
    crash.play();
    break;
  
    case "c":
      var kick = new Audio('sounds/bell2.mp3');
    kick.play();
    break; 
    

    case "i":
      var crash = new Audio('sounds/kick-bass.mp3');
      crash.play();
      break;
    

    case "o":
      var kick = new Audio('sounds/snare.mp3');
      kick.play();
      break;
  


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

// document.addEventListener("keydown", function(event) {
//   var btn = document.getElementById("btn1");
//   btn.click();
//   btn.classList.add('active');
// });
// document.addEventListener("keyup", function(event) {
//   var btn = document.getElementById("btn1");
//   btn.classList.remove('active');
// });

}

