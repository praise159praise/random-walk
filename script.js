 var x
 var y
 
 function setup(){
     createCanvas(1000,1000)
     x= 250
     y=250  
     background(51)

 }
 function draw(){
     point(x,y)
     stroke(255)
     strokeWeight(5)
     var r = floor(random(4))

     
        stroke(floor(random(255)),floor(random(255)),floor(random(255)))
        switch (r) {
            case 0:
                if(x<width && x>0 && y<height && y>0) x += 5
                break;
           case 1:
            if(x<width && x>0 && y<height && y>0) x -= 5
               break;
           case 2:
            if(x<width && x>0 && y<height && y>0) y += 5
               break;
           case 3:
            if(x<width && x>0 && y<height && y>0) y -= 5
               break;
            default:
                break;
        
     }
 }