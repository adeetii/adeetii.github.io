let button1, button2, button3,bttnRock,bttnPaper,bttnSci
let RndNumber= 0
let bbtnReplay, bbtnExit
let Notes= "Welcome to my page, please choose"
let result=""
function setup() 
{
  createCanvas(600, 600);

  button1 = createButton('Best of 1');
  button1.position(150,300);
  button1.mousePressed(showRPS)
  
  button2 = createButton('Best of 2');
  button2.position(250,300);
  
  button3 = createButton('Best of 3');
  button3.position(350,300);
  
  bbtnRock = createButton('Rock');
  bbtnRock.position(150,300);
  bbtnRock.mousePressed(CompRock)
  bbtnRock.hide()
  
  bbtnPaper = createButton('Paper');
  bbtnPaper.position(250,300);
  bbtnPaper.mousePressed(CompPaper)
  bbtnPaper.hide()
  
  bbtnSci = createButton('Scissors');
  bbtnSci.position(350,300);
  bbtnSci.mousePressed(CompScissors)
  bbtnSci.hide()
  
  bbtnReplay = createButton('New Game');
  bbtnReplay.position(350,400);
  bbtnReplay.mousePressed(showRPS)
  bbtnReplay.hide()
  
  bbtnExit = createButton('Exit');
  bbtnExit.position(250,400);
  bbtnExit.mousePressed()
  bbtnExit.hide()
  
  //newGame()
}

//function newGame()
//{
  //RndNumber = round (random(0.5,3.5))
//}


function draw() 
{
  background('grey');
  text("Welcome",260,275)
  text(Notes,190,200)
  text(result,150,300)
  text(RndNumber,300,300)
}

function showRPS()
{
  Notes= "plz choose one out of Rock, Paper, Scrissors"
  button1.hide()
  button2.hide()
  button3.hide()
  bbtnRock.show()
  bbtnPaper.show()
  bbtnSci.show()
  bbtnExit.hide()
  bbtnReplay.hide()
  result=""
  RndNumber = round (random(0.5,3.5))
}

function CompRock()
{
  if( RndNumber == 2)
    {
      result= 'You wonn!!'
    }
  else if (RndNumber == 3)
    {
      result='Computer wonn!!'
    }
  else 
    {
      result='Its a Tie'
    }
  
  hideRPS()
 
}

function CompPaper()
{

   if(RndNumber == 1)
        {
         result = 'You Won !!'
        }
    else if (RndNumber == 3)
        {
          result = 'Computer Won !!'
        }
    else
        {
          result = "It's Tie"
        }
  
  hideRPS()
}

function CompScissors()
{

   if(RndNumber == 2)
        {
         result = 'Computer Won !!'
        }
    else if (RndNumber == 1)
        {
          result = 'You Won !!'
        }
    else
        {
          result = "It's Tie"
        }
  hideRPS()

}

function hideRPS()
{
  bbtnSci.hide()
  bbtnRock.hide()
  bbtnPaper.hide()
  Notes=""
  bbtnExit.show()
  bbtnReplay.show()
  //newGame();
}

function Exit()
{
  
}
