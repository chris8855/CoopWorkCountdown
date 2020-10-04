function setup() {
  createCanvas(400, 100);
  
}

function draw() {
  console.log(mouseX, mouseY)
  background(225, 255, 0);
  let millisecond = millis();
  text('How long I have been working on this project: ' + millisecond, 5, 40 );
  text('(ms)', 300, 56)
}
