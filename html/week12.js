let Hslider, sldWidth, sldHeight, sldCorner
let Vslider, RdShape, colorPicker, CpShape2, CpShape3

//string variables
let param1 ="Width"
let param2 ="Height"

function setup() 
{
  createCanvas(600, 600);
  Hslider= createSlider(1,9,3)
  Hslider.position(610,25)
  Hslider.style('width','160px')
  
  Vslider= createSlider(1,9,8)
  Vslider.position(610,50)
  Vslider.style('width', '160px')
  
  sldWidth= createSlider(1,100,25)
  sldWidth.position(610,80)
  sldWidth.style('width','160px')
  
  sldHeight= createSlider(1,100,25)
  sldHeight.position(610,110)
  sldHeight.style('width','160px')
  
  RdShape= createRadio();
  RdShape.option('Rect');
  RdShape.option('Circle');
  RdShape.option('RoundRect');
  RdShape.style('width','60px');
  RdShape.position(610, 160)
  
  colorPicker = createColorPicker('white');
  colorPicker.position(610, 400);
  colorPicker.style("height", "25px")
  
  CpShape2 = createColorPicker('grey');
  CpShape2.position(610, 350);
  CpShape2.style("height", "25px")
  
  CpShape3 = createColorPicker('blue');
  CpShape3.position(610, 300);
  CpShape3.style("height", "25px")
}

function draw() 
{
  background('black');
  text("Hori",560,40)
  text("Ver",560,60)
  text(param1,550,95)
  text(param2,550,120)


  
  for(m=0; m< Vslider.value(); m++)
    {
      for(i=0;i< Hslider.value();i++)
      {
        if(i%2==1 && m%2==1)
          {
            fill(colorPicker.color())
          }
        else if( i%2==0 && m%2==0)
          {
            fill(CpShape2.color())
          }
        else
          {
            fill(CpShape3.color())
          }
        if( RdShape.value() == "Rect")
          { 
            param1 = "Width"
            param2 = "Height"
            sldHeight.show()
            rect(60*i+20,60*m,sldWidth.value(), sldHeight.value())
          }
        else if(RdShape.value()== "RoundRect")
          {
            param1 = "Width"
            param2 = "Height"
            sldHeight.show()
            rect(60*i+20,60*m,sldWidth.value(), sldHeight.value(),10)
          }
        else 
          {
            param1="Radius"
            param2=" "
            sldHeight.hide()
            circle(60*i+20,60*m,sldWidth.value())
          }
    }
}
}