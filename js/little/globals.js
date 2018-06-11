c=document.getElementById("mainCanvas");
ctx=c.getContext("2d");
ctx.save();

var keys = [];
var click = [0,0];
var mouseDown = false;

window.addEventListener("keydown", function (e) {
    e.preventDefault();
    keys[e.keyCode] = true;
});
  window.addEventListener("keyup", function (e) {
    e.preventDefault();
    keys[e.keyCode] = false;
});

c.addEventListener("mousedown", function (e) {
    e.preventDefault();
    mouseDown = true;
    click[0] = e.layerX;
    click[1] = e.layerY;
});

c.addEventListener("mouseup", function (e) {
    e.preventDefault();
    mouseDown = false;
});