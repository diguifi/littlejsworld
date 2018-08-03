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
    click[0] = e.touches[0].pageX;
    click[1] = e.touches[0].pageY - e.path[0].offsetTop;
}, false);

c.addEventListener("touchend", function (e) {
    e.preventDefault();
    mouseDown = false;
}, false);

c.addEventListener("touchmove", function (e) {
    e.preventDefault();
    if(mouseDown){
        var touch = e.touches[0];
        click[0] = touch.pageX;
        click[1] = touch.pageY - e.path[0].offsetTop;
    }
}, false);


doNotRepeat = false;
phrases = ["Are you Ok?", "Man thats a lot of damage", "Calm down bro!",
            "Please dont be mad...", "You look pissed", "Come on, its not that hard",
            "Why are you crying?", "You are very bad, sory", "Not doing so great i guess",
            "Have you tried yoga?", "oh boy...", "Its fine, relax"];