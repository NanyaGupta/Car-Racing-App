var canvas,ctx,Car1_Width,Car1_Height,Car1_X,Car1_Y,Car1_Image,Car2_Width,Car2_Height,Car2_X,Car2_Y,Car2_Image,backgroundImage,keyPressed;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
Car1_Width=100;
Car1_Height=90;
Car1_X=10;
Car1_Y=10;
Car1_Image="car1.png";

Car2_Width=100;
Car2_Height=90;
Car2_X=10;
Car2_Y=100;
Car2_Image="download.png";
backgroundImage="racing.jpg";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=backgroundImage;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=Car1_Image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=Car2_Image;

}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}
function uploadcar1(){
    ctx.drawImage(car1_imgTag,Car1_X,Car1_Y,Car1_Width,Car1_Height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag,Car2_X,Car2_Y,Car2_Width,Car2_Height);
}

window.addEventListener("keydown",myKeyDown);

function myKeyDown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        car1_up();
        console.log("up");
    }
    if(keyPressed=="40"){
        car1_down();
        console.log("down");
    }
    if(keyPressed=="37"){
        car1_left();
        console.log("left");

    }
    if(keyPressed=="39"){
        car1_right();
        console.log("right");
    }
    if(keyPressed=="87"){
        car2_up();
        console.log("key W");
    }
    if(keyPressed=="83"){
        car2_down();
        console.log("key S");
    }

    if(keyPressed=="65"){
        car2_left();
        console.log("key A");
    }

    if(keyPressed=="68"){
        car2_right();
        console.log("key D");
    }
    if(Car1_X > 700){
        console.log("Car 1 won the Game!!!")
        document.getElementById("gameStatus").innerHTML="Car 1 Won!"
    }
    if(Car2_X > 700){
        console.log("Car 2 won the Game!!!")
        document.getElementById("gameStatus").innerHTML="Car 2 Won!"
    }
}

function car1_left(){
    if(Car1_X>=0){
        Car1_X =Car1_X-10;
        console.log("when left arrow is clicked,X= " + Car1_X +" | Y= " + Car1_Y);
        uploadBackground();
            uploadcar1();
            uploadcar2(); 
    }
}

function car1_up(){
    if(Car1_Y>=0){
        Car1_Y =Car1_Y-10;
        console.log("when up arrow is clicked,X= " + Car1_X +" | Y= " + Car1_Y);
        uploadBackground();
            uploadcar1();
            uploadcar2();
        
    }
}

function car1_right(){
    if(Car1_X<=700){
        Car1_X=Car1_X+10;
        console.log("when right arrow is clicked,X= " + Car1_X +" | Y= " + Car1_Y);
        uploadBackground();
            uploadcar1();
            uploadcar2();
        
    }
}

function car1_down(){
    if(Car1_Y<=500){
        Car1_Y=Car1_Y+10;
        console.log("when down arrow is clicked,X= " + Car1_X +" | Y= " + Car1_Y);
        uploadBackground();
            uploadcar1();
            uploadcar2();
        
    }
}

function car2_right(){
    if(Car2_X<=700){
        Car2_X=Car2_X+10;
        console.log("when D key is clicked,X= " + Car2_X +" | Y= " + Car2_Y);
        uploadBackground();
            uploadcar1();
            uploadcar2();
        
    }
}

function car2_up(){
    if(Car2_Y>=0){
        Car2_Y=Car2_Y-10;
        console.log("when W key is clicked,X= " + Car2_X +" | Y= " + Car2_Y);
        uploadBackground();
            uploadcar1();
            uploadcar2();
        
    }
}

function car2_down(){
    if(Car2_Y<=500){
        Car2_Y=Car2_Y+10;
        console.log("when  S Key  is clicked,X= " + Car2_X +" | Y= " + Car2_Y);
        uploadBackground();
            uploadcar1();
            uploadcar2();
        
    }
}

function car2_left(){
    if(Car2_X>=0){
        Car2_X=Car2_X-10;
        console.log("when A Key is clicked,X= " + Car2_X +" | Y= " + Car2_Y);
        uploadBackground();
            uploadcar1();
            uploadcar2();
        
    }
}









