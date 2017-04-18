jQuery(document).ready(function(){
  sketchPad();

});

function sketchPad(){
  createGrid();
  random = false;
  draw(random);
  setRandom();
  erase();
}

function draw(rand){
    $(".grid").mouseenter(function(){
      if(rand){
        rgb = randomColor();
      } else {
        rgb = [0,0,0];
      }
      $(this).css("background-color", "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")");
  });
}

function setRandom(){
    $(".random").click(function(){
      random = !random;
      if(random){
          $(this).html("Random colors are ON");
          draw(true);
      } else {
        $(this).html("Random colors are OFF");
        draw(false);
      }
    });
}

function randomColor(){
  r = Math.floor(Math.random()*255);
  g = Math.floor(Math.random()*255);
  b = Math.floor(Math.random()*255);
  return [r,g,b];
}

function erase(){
    $(".erase").click(function(){
      size = prompt("How many pixels tall/wide should the grid be?");
      createGrid(size);
    });
}

function createGrid(size = 16){
  $(".container").remove();
  $("body").append("<div></div>");
  $("div").addClass("container");
  container = $(".container");
  for(i=0;i<size;i++){
    for(j=0;j<size; j++){
        container.append("<div class='grid'></div>");
    }
    container.append("<br/>");
  }
}