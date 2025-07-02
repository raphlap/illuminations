const increment = 0.02;
var xt = 5;
var yt = 30;
var ytrans = -50;
var c;
var nb;
var n;
var rimbaud_text;

var line_list = [];
//var text = ['t', 'e', 'x', 't'];

function preload() {
  
  rimbaud_text = loadJSON('mouvement_rimbaud.json');
//console.log(rimbaud_text)

}


function setup() {
  createCanvas(2000, 6000);
  noLoop();
  var rbd_length = Object.keys(rimbaud_text).length;
  for (var e = 0; e < rbd_length; e++) {
    var line = [];
    for (var i = 0; i < rimbaud_text[e].length; i++) {
      for (var l = 0; l < rimbaud_text[e][i].length ; l++) {
          //console.log(rimbaud_text[e][i][l]);
      }
      rimbaud_text[e][i].push(' ');
      //console.log(rimbaud_text[e][i]);
      line.push(rimbaud_text[e][i]);
      
    }
    line_list.push(line)
    //console.log(line);
    //console.log(rimbaud_text[e][0]);
  }
  //console.log(line_list)
}

function draw() {

  background(255);
  colorMode(HSB, 348);
  let xOff = 0;
  line_list.forEach(function(line){
    ytrans+=100;
    xt=0;
    line.forEach(function(word){
      word.forEach(function(letter){
        //console.log(letter);
   
        


        //var a = ["R", "a", "p", "h", "a", "ë", "l", "l", "e"];

  for (let x = 0; x < 200; x++) {
    let yOff = 0;
    
    xOff += increment;
    
    for (let y = 0; y < 200; y++) {
      yOff += increment
      
      n = noise(xOff, yOff);
      if (isOdd(line_list.indexOf(line)) == 1) {    //  noise
      const h = 348;                  //  hue
      const s = 91;                  //  saturation
      const b = map(n, 0, 1, 0, 348); //  brightness
      c = color(h, s, b);
      }else{
      const h = 231;                  //  hue
      const s = 97;                  //  saturation
      const b = map(n, 0, 1, 0, 231); //  brightness
      c = color(h, s, b);
      } 
      //  color instance
      
      //set(x, y, c);                   //  set pixel
    }
  }



  
  //updatePixels();
    if(word[word.indexOf(letter)-1] == "m"){
      xt+=25;
    }else if (word[word.indexOf(letter)-1] == "l" || 
      word[word.indexOf(letter)-1] == "f" || 
      word[word.indexOf(letter)-1] == "'" || 
      word[word.indexOf(letter)-1] == "i" ||
      word[word.indexOf(letter)-1] == "r" ||
      word[word.indexOf(letter)-1] == "t" ||
      word[word.indexOf(letter)-1] == "j" ||
      word[word.indexOf(letter)-1] == "\u00ef"){
      xt+=9;
    }else if (letter == "'") {
      xt-=15;
    }else if (letter == "e" ||
      letter == "\u00ea" ||
      letter == "\u00e9" ||
      letter == "\u00e8") {
      xt+=20;
    }else{
      xt+=17;
    }
    yt += increment;
    nb = noise(yt) * 100;
    fill(c)
    textSize(25)
    textStyle(BOLD)
    textAlign(TOP);
    push();
    translate(0, ytrans);
    text(letter, xt, nb);
    pop();
    
      });
    //console.log(word);
    });
  });

}

function isOdd(num) {
  return num % 2;
}