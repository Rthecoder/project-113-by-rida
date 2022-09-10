noseX=0;
noseY=0;

function preload()
{
clown_nose=loadImage('https://i.postimg.cc/rpThYTSG/download.png');
}

function setup(){
c1=createCanvas(400,400)
c1.center()
v1=createCapture(VIDEO)
v1.hide();
posenet=ml5.poseNet(v1,modelloaded);
posenet.on('pose',gotposes);
}

function modelloaded()
{
    console.log("Posenet Is Initialized")
}

function draw(){
image (v1, 0,0,400,400);
fill(400,0,0);
stroke(400,0,0);
circle(noseX,noseY,20);

//image(clown_nose, noseX, noseY,30, 30);
console.log("hi")
}

function sd(){
    save ("MyPicture.jpg")
}

function gotposes(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else 
    { 
        
            console.log(results);
            noseX=results[0].pose.nose.x-10;
            noseY=results[0].pose.nose.y-10;

        console.log("nose x ="+ noseX);
        console.log("nose y ="+ noseY);
        
    }
}