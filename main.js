song1 = "birthday1.mp3";
song2 = "birthday2.mp3";


function preload(){
    song1 = loadSound("birthday1.mp3");
    song2 = loadSound("birthday2.mp3");
}






function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

function stop(){
    song.stop();
    song2.stop();
}

function next(){
    song.stop();
    song2.play();
}



function setup(){
    canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized");

}

function draw(){
    image(video , 0 , 0 , 600 , 500);

    fill("red");
    stroke("aqua");
    if( scoreRightWrist > 0.2)
    {
     circle(rightWristX , rightWristY , 20);
     song2.stop();
     if(song1_status == false){
        song1.play();
        document.getElementById("play").innerHTML = "Playing jingle bell song ";
     }
    }

    if( scoreLeftWrist > 0.2)
    {
     circle(leftWristX , leftWristY , 20);
     song1.stop();
     if(song2_status == false){
        song2.play();
        document.getElementById("play").innerHTML = "Playing Jungu song ";
     }
    
     
    }
}

