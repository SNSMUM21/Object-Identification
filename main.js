function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}

img ="";

function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image ( img, 0 ,0 ,640 , 420);  
    fill("#3003fc");
    text("Dog" , 45 , 75);
    noFill();
    stroke("#3003fc");  
    rect(30 , 60 , 450 , 350)
}