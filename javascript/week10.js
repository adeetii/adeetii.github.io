//global variables
let Rndnumber
let userchoice

function setup() 
{
  createCanvas(400, 400);
  Rndnumber = round(random(0.5,3.5));
  
  userchoice = createInput('');
  userchoice.position(110,120)
}

function draw() 
{
  background(220);
  textSize(15);
  text('Choose a number 1:Rock, 2:Paper, 3:Scrissos',30,100);
//for rndnumber = to remove bias, adding more range after checking stats to give unbiased results
  textSize(50);
  frameRate(1);
  text(userchoice.value(),150,250);
  text(Rndnumber,180,200);
  
let UC= userchoice.value();

  if(Rndnumber == 1)
    {
      if( UC == 2)
        {
          text('You wonn!!',150,350)
        }
      else if (UC ==3)
        {
          text('Computer wonn!!',150,350)
        }
      else 
        {
          text("It's a tie",150,350)
        }
    }
  
else if (Rndnumber == 2)
  {
    if( UC == 3)
        {
          text('You wonn!!',150,350)
        }
      else if (UC ==1)
        {
          text('Computer wonn!!',150,350)
        }
      else 
        {
          text("It's a tie",150,350)
        }
  }
  
else 
  {
    if( UC == 2)
        {
          text('You wonn!!',150,350)
        }
      else if (UC ==1)
        {
          text('Computer wonn!!',150,350)
        }
      else 
        {
          text("It's a tie",150,350)
        }
  }
  
}