c=document.getElementById("mainCanvas");
ctx=c.getContext("2d");
ctx.font = "32px arial, verdana, sans-serif ";

var keys = [];

window.addEventListener("keydown", function (e) {
    e.preventDefault();
    keys[e.keyCode] = true;
});
  window.addEventListener("keyup", function (e) {
    e.preventDefault();
    keys[e.keyCode] = false;
});