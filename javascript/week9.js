// random shapes
function setup() {
    createCanvas(400, 400);
    background(50);
  }
  
  function draw() {
    fill("grey");
    rect(200,200,20,20);
    noFill();
    circle(300,300,100);
    line(0,100,100,100);
    fill("blue")
    triangle(90,90,90,10,0,10);  
  }

// car
function setup() {
    createCanvas(500, 500);
    background(50);
  }
  
function draw() {
    fill("white")
    rect(100,120,200,100);
    rect(130,140,70,60);
    rect(210,140,70,60);
    triangle(100,120,100,220,0,220); 
    triangle(300,120,300,220,400,220);
    rect(0,220,400,100);
    fill("grey")
    circle(100,330,80);
    circle(310,330,80);
  }

/* statement
variable-
enviornment variable
condition
loop
function -->
<!-- shape(pos/size)-->
<!-- shape(x,y,w,h)
x is horixontal move on the canvas
y is vertical move on the canvas -->
<!-- control f to search -->
<!-- // single line comment
 multi line comment */
 /* divinding number highest remainder is n-1 */
//compound condition, first and second both to work or not work then only something with happen