leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);
    
    canvas = createCanvas(550 , 490);
    canvas.position(550 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    urname = document.getElementById("name_collector").value;
    document.getElementById("realtime_font").innerHTML = difference;

    background('#f0b24f');
    fill('#b5b5b5');
    stroke('#b5b5b5');
    text(urname , 50 , 400);
    textSize(difference);
}

function modelLoaded()
{
    console.log("poseNet is loaded");
}

function gotPoses(results)
{
    if(results)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}