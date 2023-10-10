function setup() {
    createCanvas(400, 400);
    background("gold");
  }
  
  function draw() {
  
   stroke ("purple")
    fill ("cyan")
    
   if (mouseIsPressed) 
    rect(mouseX, mouseY, 20, 20);
    
  }