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

c.addEventListener("click", function (e) {
    e.preventDefault();
    click[0] = e.layerX;
    click[1] = e.layerY;
});

c.addEventListener("touchstart", function (e) {
    e.preventDefault();
    mouseDown = true;
    var touch = e.touches[0];
    click[0] = touch.layerX;
    click[1] = touch.layerY;
}, false);

c.addEventListener("touchend", function (e) {
    mouseDown = false;
}, false);

c.addEventListener("touchmove", function (e) {
    if(mouseDown){
        var touch = e.touches[0];
        click[0] = touch.layerX;
        click[1] = touch.layerY;
    }
}, false);