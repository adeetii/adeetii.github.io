function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  for (i= 0; i<10 ; i++)
    {
      //rect(i*10,i*10,i*50,i*50)
      fill(i*30)
      //rect(i*50,i*10,50,50)
      fill(20*i,20*i,0)
      rect(25*i,10,20,20)
    }
  }