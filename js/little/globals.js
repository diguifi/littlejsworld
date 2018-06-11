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
    click[0] = e.touches[0].clientX;
    click[1] = e.touches[0].clientY - e.path[0].offsetTop;
}, false);

c.addEventListener("touchend", function (e) {
    e.preventDefault();
    mouseDown = false;
}, false);

c.addEventListener("touchmove", function (e) {
    e.preventDefault();
    if(mouseDown){
        var touch = e.touches[0];
        click[0] = touch.clientX;
        click[1] = touch.clientY - e.path[0].offsetTop;
    }
}, false);