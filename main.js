rightEyeX=0;
rightEyeY=0;

leftEyeX=0;
leftEyeY=0;


function preload() {
glasses = loadImage('https://i.postimg.cc/HkmzcJTW/4106-removebg-preview-1.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
     leftEyeX= results[0].pose.leftEye.x-42;
     leftEyeY= results[0].pose.leftEye.y-35;

     rightEyeX= results[0].pose.rightEye.x-42;
     rightEyeY= results[0].pose.rightEye.y-35;
  }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(glasses, rightEyeX, rightEyeY, leftEyeX, leftEyeY,20, 80);
}

function take_snapshot() {
    save('myFilterImage.png');
}