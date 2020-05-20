let friends = [
  "Chuy",
  "Stephen",
  "Quinton",
  "Ashton",
  "Joe",
  "Alex",
  "Harrison",
  "Gracie",
  "Anna",
  "Charles",
];
let currentFriend = 0;

$("#1").append("<button id='niceButton'>Nice.</button>");
$("#niceButton").click(function () {
  alert("Nice.");
});

$("#btnSubmit").click(function () {
  $userText = $("#userText").val();
  alert($userText);
});

$("#colorChanging").css("height", "50px");

$("#colorChanging").mouseenter(function () {
  $(this).css("backgroundColor", "red");
});

$("#colorChanging").mouseleave(function () {
  $(this).css("backgroundColor", "white");
});

$("#4").append(
  "<p id='changesColors'>This text changes color when clicked</p>"
);

$("#changesColors").click(function () {
  let randomColor1 = Math.floor(Math.random() * 255);
  let randomColor2 = Math.floor(Math.random() * 255);
  let randomColor3 = Math.floor(Math.random() * 255);
  $(this).css(
    "color",
    "rgb(" + randomColor1 + "," + randomColor2 + "," + randomColor3 + ")"
  );
});

$("#5").append("<button id='nameButton'>What is my name?</button>");
$("#5").append("<div id='myNameDiv'></div>");
$("#nameButton").click(function () {
  $("#myNameDiv").append("<span>Will </span>");
});

$("#addFriend").click(function () {
  $("#friendList").append("<li>" + friends[currentFriend] + "</li>");
  ++currentFriend;
  if (currentFriend == 10) {
    currentFriend = 0;
  }
});
