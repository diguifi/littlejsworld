c=document.getElementById("mainCanvas");
ctx=c.getContext("2d");
ctx.save();

var keys = [];
var click = [0,0];

window.addEventListener("keydown", function (e) {
    e.preventDefault();
    keys[e.keyCode] = true;
});
  window.addEventListener("keyup", function (e) {
    e.preventDefault();
    keys[e.keyCode] = false;
});

c.addEventListener("click", function (e) {
    e.preventDefault();
    click[0] = e.layerX;
    click[1] = e.layerY;
});