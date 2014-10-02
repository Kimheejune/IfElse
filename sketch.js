var trailX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var trailY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];





function setup()
 {
  createCanvas(600, 600);
  noFill();
  stroke(255, 100, 180);
}

  function draw()
{
  background(120, 50, 40);
  if (mouseX < 300) {
  ellipse(200,200,100,100);
}

trailX[0] = (mouseX + trailX[0] * 4) / 5;
trailY[0] = (mouseY + trailY[0] * 4) / 5;
ellipse(trailX[0], trailY[0], 80, 80);

for (var i = 1; i < 10; i = i + 1)
{
 trailX[i] = (trailX[i-1] + trailX[i] * 4) / 5;
 trailY[i] = (trailY[i-1] + trailY[i] * 4) / 5;
 ellipse(trailX[i], trailY[i], 80, 80); 
}




// draw function
if (mouseX < 300) {
  ellipse(200, 200, 200, 200);
} else {
  ellipse(400, 200, 400, 400);
}

// draw function
if (mouseX < 100) {
  ellipse(50, 200, 100, 100);
} else if (mouseX < 200){
  ellipse(150, 200, 100, 100);
} else if (mouseX < 300){
  ellipse(250, 200, 100, 100);
} else if (mouseX < 400){
  ellipse(350, 200, 100, 100);
} else if (mouseX < 500){
  ellipse(450, 200, 100, 100);
} else {
  ellipse(550, 200, 100, 100);
}

}