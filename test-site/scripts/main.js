//h1
var myHeading = document.querySelector("h1");
myHeading.innerHTML = "Hello World";

//img
var myImage = document.querySelector("img");
myImage.onclick = function() {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/test3.png") {
    myImage.setAttribute("src", "images/test4.png");
  } else {
    myImage.setAttribute("src", "images/test3.png");
  }
};

//button测试123
var myButton = document.querySelector("button");

function setUserName() {
  var myName = prompt("Please Enter Your Name");
  localStorage.setItem("name", myName);
  myHeading.innerHTML = "Mozilla is Cool," + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function() {
  setUserName();
};
