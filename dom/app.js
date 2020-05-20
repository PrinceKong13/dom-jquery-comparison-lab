let friends = ["Chuy", "Stephen", "Quinton", "Ashton", "Joe", "Alex", "Harrison", "Gracie", "Anna", "Charles"]
let currentFriend = 0;

let niceButton = document.createElement("button");
let niceText = document.createTextNode("Nice.");
let example1 = document.getElementById("1")
example1.appendChild(niceButton);
niceButton.appendChild(niceText);
niceButton.addEventListener("click", function () {
  alert("Nice.");
});

let textButton = document.getElementById("btnSubmit");
textButton.addEventListener("click", function () {
  let userInput = document.getElementById("userText").value;
  alert(userInput);
});

let colorChangingDiv = document.getElementById("colorChanging");
colorChangingDiv.style.height = "50px";

colorChangingDiv.addEventListener("mouseenter", function () {
  colorChangingDiv.style.backgroundColor = "red";
});

colorChangingDiv.addEventListener("mouseleave", function () {
  colorChangingDiv.style.backgroundColor = "white";
});

let example4 = document.getElementById("4")
let colorChangePara = document.createElement("p");
let colorChangingParaText = document.createTextNode(
  "this text changes colors when you click it"
);
example4.appendChild(colorChangePara);
colorChangePara.appendChild(colorChangingParaText);

colorChangePara.addEventListener("click", function () {
  let randomColor1 = Math.floor(Math.random() * 255);
  let randomColor2 = Math.floor(Math.random() * 255);
  let randomColor3 = Math.floor(Math.random() * 255);
  colorChangePara.style.color =
    "rgb(" + randomColor1 + "," + randomColor2 + "," + randomColor3 + ")";
});

let example5 = document.getElementById("5")
let nameButton = document.createElement("button");
let nameButtonText = document.createTextNode("What is my name?");
example5.appendChild(nameButton);
nameButton.appendChild(nameButtonText);

let nameDiv = document.createElement("div");
example5.appendChild(nameDiv);

nameButton.addEventListener("click", function () {
  let nameSpanText = document.createTextNode("Will ");
  let nameSpan = document.createElement("span");
  nameDiv.appendChild(nameSpan);
  nameSpan.appendChild(nameSpanText);
});

let friendList = document.getElementById("friendList");
let friendButton = document.getElementById("addFriend");

friendButton.addEventListener("click", function() {
  let friendItem = document.createElement("li");
  let friendText = document.createTextNode(friends[currentFriend]);
  friendItem.appendChild(friendText);
  friendList.appendChild(friendItem);
  currentFriend++;
  if (currentFriend == 10) {
    currentFriend = 0;
}
})
