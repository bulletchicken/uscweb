//oo wee oo... wee
window.onload = function(){

  var btnText = document.getElementById("btnText");

  jQuery.easing.def = "easeOutCubic";
  $("html, body").animate({
    scrollTop: $("#destination").offset().top
  }, 'easeOutQuint'); 

  console.log("hit");
}

function empty(){
    /*make smaller */
    console.log(btnText);
    btnText.innerHTML = "welcome";
    
}

