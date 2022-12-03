function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
     for(j=0;j<10;j++) 
      {
        for (i=0; i<10; i++)
        {
          if(i%2==0 && j%2==0)
            {
          fill (20*i, 20*j, 120)
          rect(i*32, j*32, 32)
            }
          else if(i%2!=0 && j%2!=0)
            {
          fill (20*i, 20*j, 120)
          rect(i*32, j*32, 32)
            }      
        }
      }
  }