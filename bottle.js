z=[];
status1="";
function preload() {
    load_image=loadImage("Bottles.jpg")
}

function setup() {
    canvas=createCanvas(600,500);
    canvas.position(700,300);

    loading_model= ml5.objectDetector("cocossd", modelHasLoaded);

}

function modelHasLoaded() {
    console.log("Cocossd is a buiscuit's name");
    status1=true;
    loading_model.detect(load_image, recieve_result);
}
function recieve_result(error,result) {
    if (error) {
        console.log(error);
    }
    else {
      console.log(result);
        z=result;
    }
    }

function draw() {
    image(load_image,0,0,600,600);
}
