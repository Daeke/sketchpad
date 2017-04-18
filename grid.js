jQuery(document).ready(function(){
  $("body").append("<div></div>");
  $("div").addClass("container");
  for(i=0;i<16;i++){
    for(j=0;j<16;j++){
        $(".container").append("<div class='grid'></div>");
    }
    $(".container").append("<br/>");
  }
  $(".grid").mouseenter(function(){
    $(this).css("background-color", "black");
  });

  $(".erase").click(function(){
    $("div").css("background-color", "white");
  });
});