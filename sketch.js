var img;

function preload(){
    img = loadImage("rihanna.jpg");
}


function setup(){
    createCanvas(img.width,img.height);
}

function draw(){
    image(img, 0, 0);
    loadPixels();
    
    
    for(var row=0; row<height; row++){
        for(var col=0; col<width; col++){
            var index = (row * width + col) * 4;
            
            r = pixels[index];
            g = pixels[index + 1];
            b = pixels[index + 2];
            a = pixels[index + 3];
            
            
            
           if(keyIsPressed){
               if(key=="t"){
                   tanaiyah(index, r, g, b, a, col);
          
               }
              if(key=="1"){
                    blackandwhite(index,g, a);   
               }
             if(key=="2"){
                        pixels[index] = 0;
                        pixels[index + 1] = g;
                        pixels[index + 2] = 0;
                        pixels[index + 3] = a
             }
                        if(key=="3"){
                        pixels[index] = 0;
                        pixels[index + 1] = 0;
                        pixels[index + 2] = b;
                        pixels[index + 3] = a;
                     }
                      if(key=="4"){
                        pixels[index] = r/2;
                        pixels[index + 1] = g/2;
                        pixels[index + 2] = b/2;
                        pixels[index + 3] = a;
                 
              }
                        if(key=="5"){
                        pixels[index] = r*2;
                        pixels[index + 1] = g*2;
                        pixels[index + 2] = b*2;
                        pixels[index + 3] = a;
                        
                    }
                        if(key=="6"){
                        pixels[index] = 255 - r;
                        pixels[index + 1] = 255 - g;
                        pixels[index + 2] = 255 - b;
                        pixels[index + 3] = a;
                   }
                        if(key=="7"){
                        pixels[index] = r + row - 0;
                        pixels[index + 1] = g + col  -0;
                        pixels[index + 2] = b;
                        pixels[index + 3] = a;
                        }
                        if(key=="8"){
                            if(index % 20 == 0){
                                pixels[index] = 255;
                                pixels[index + 1] = 0;
                                pixels[index + 2] = 0;
                                pixels[index + 3] = a;        
                            }      
                        }
                        if(key=="9"){
                            var lastPixel = pixels.length - 1; 
                            pixels[lastPixel - index - 3] = r;
                            pixels[lastPixel - index - 2] = g;
                            pixels[lastPixel - index - 1] = b;
                            pixels[lastPixel - index - 0] = a;         
                        }
                        
                       
           }
           
          
    }
}
    updatePixels();
    
}

function tanaiyah(index, r, g, b, a, col){
    pixels[index] = r+col-150;
    pixels[index + 1] = g-50;
    pixels[index + 2] = b+col-50;
    pixels[index + 3] = a;   
}
    
function blackandwhite(index, g, a){
    pixels[index] = g;
    pixels[index + 1] = g;
    pixels[index + 2] = g;
    pixels[index + 3] = a
}