//  option 1: directly set on the html elements
// <button onclick="console.log(65)">Another Button</button>

// option 2: add onclick function on the html elements
// <button onclick="makeRed()">Make Red</button>
// IMPORTANT IMPORTANT IMPORTANT IMPORTANT -------
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option 3: কম ব্যবহার হবে
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option 3: another কম ব্যবহার হবে
const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

//  option 4: মাঝে মাঝে ব্যবহার হবে
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

//  option 4: another মাঝে মাঝে ব্যবহার হবে
const makeGreenButton = document.getElementById("make-green");
makeGreenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

//  option 4: Final সবথেকে বেশি ব্যবহার হবে
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = "goldenrod";
  })