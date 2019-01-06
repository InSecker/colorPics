function setup() {
  createCanvas(1200, 800)
  truck = loadImage("assets/img/truck.png")
  frameRate(25)
  
}

function draw() {
  cursor(HAND) 
  image(truck, 0, 0, 1200, 800)
  tint((mouseX/width)*255, (mouseY/height)*255, (mouseX/mouseY)*255)
}

