function grow() {
  var character = document.getElementById("character");
  var height = character.height;
  character.style.height = height + 20 + "px";
}

function shrink() {
  var character = document.getElementById("character");
  var height = character.height;
  character.style.height = height - 20 + "px";
}
