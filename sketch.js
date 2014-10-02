var trailX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var trailY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


function setup() {
  createCanvas(800, 600);
  noFill();
  stroke(255, 100, 124);
}

  function draw()
  {
  background(0,100,124)

    //ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX, mouseY, 100, 100);
  
// trail ellipse #0
trailX[0] = (mouseX + trailX[0] * 4) / 5;
trailY[0] = (mouseY + trailY[0] * 4) / 5;
 ellipse(trailX[0], trailY[0], 80, 80);

for (var i = 1; i < 10; i = i + 1)
{
   trailX[i] = (trailX[i-1] + trailX[i] * 4) / 5;
   trailY[i] = (trailY[i-1] + trailY[i] * 4) / 5;
   ellipse(trailX[i], trailY[i], 80, 80); 
}

if (mouseX < 300) {
  ellipse(200, 200, 100, 100);
}

}