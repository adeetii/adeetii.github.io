function setup() {
    createCanvas(450, 450);
      background(220);
  }
  
  function draw() {
  
    noStroke();
    if (mouseIsPressed == true)
    {
    
    if(mouseX<150 & mouseY<150 & mouseX<300 & mouseY<300)
       {
         fill("#f4c2c2")
       rect(mouseX,mouseY,10,10)
       }
    
      else if(mouseX>150 & mouseY<150 & mouseX<300 & mouseY<300)
       {
         fill("#C2F4D6")
       rect(mouseX,mouseY,10,10)
       }
    else if(mouseX>150 & mouseY>150 & mouseX<300 & mouseY<300)
       {
         fill("#C2D6F4")
       rect(mouseX,mouseY,10,10)
       }
    else if(mouseX<150 & mouseY>150 & mouseX<300 & mouseY<300)
       {
         fill("#BE38B5")
       rect(mouseX,mouseY,10,10)
       }
    else if(mouseX>300 & mouseY>300)
       {
         fill("#6DBE38")
       rect(mouseX,mouseY,10,10)
       }
      else if(mouseX>150 & mouseY>300)
       {
         fill("#3880BE")
       rect(mouseX,mouseY,10,10)
       }
    else if(mouseX<150 & mouseY>300)
       {
         fill("#A010EE")
       rect(mouseX,mouseY,10,10)
       }
      else if(mouseX>300 & mouseY>150)
       {
         fill("#DBF10D")
       rect(mouseX,mouseY,10,10)
       }
        else if(mouseX>300 & mouseY<150)
       {
         fill("#0D27F1")
       rect(mouseX,mouseY,10,10)
       }
    }
  }