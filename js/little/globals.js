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
phrases = [["Not starting so well...", "You're not even on lvl 5", "Man, come on", "This level is very easy...", "Oh boy..."],
            ["My dog can play better", "Its not even lvl 10!", "Come on, its not that hard", "Thats really bad gameplay", "This is awful"],
            ["Are you mad?", "You are very bad, sory", "Not doing so great I guess", "Its so simple", "Just give up"],
            ["Man thats a lot of damage", "Try harder, thats ridiculous", "Just give up already", "You look mad", "I sugest you to leave"],
            ["Why are you doing this", "HUE", "This is so sad", "Damn you suck bro", "GOD! why wont you stop dieing?"]];
