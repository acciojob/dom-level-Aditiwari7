//your JS code here. If required.
var element = document.getElementById("level");
var level = 0;

while (element.parentNode.tagName !== "BODY") {
  element = element.parentNode;
  level++;
}

alert("The level of the element is: " + level);