function setup() {
  createCanvas(800, 800);
  noFill();
  stroke(255, 100, 124);
}

  function draw() {
  background(227,226,225)
fill(255, 100, 124);
    //ellipse(mouseX, mouseY, 50, 50);
    ellipse(mouseX, mouseY, 100, 100);
  
if (mouseX < 100) {
  fill(241, 170, 65);
  stroke(241, 170, 65);
  ellipse(100, 200, 100, 100);
} 
else if (mouseX < 200){
  fill(229, 63, 55);
  stroke(229, 63, 55);
  ellipse(150, 200, 200, 200);
} 
else if (mouseX < 300){
  fill(130, 187, 65);
  stroke(130, 187, 65);
  ellipse(250, 200, 300, 300);
}
 else if (mouseX < 400){
  fill(34, 163, 201);
  stroke(34, 163, 201);
  ellipse(350, 200, 400, 400);
}
 else if (mouseX < 500){
  fill(186, 38, 85);
  stroke(186, 38, 85);
  ellipse(450, 200, 500, 500);
} 
else {
   fill(40, 176, 111);
  stroke(40, 176, 111);
  ellipse(550, 200, 600, 600);
}
}