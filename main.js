function preload(){

}
function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,400);
}
function start(){
    var val = document.getElementById("val-of-obj-nm").value;
    alert("#" + val);
}