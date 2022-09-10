//oo wee oo... wee
window.onload = function(){

  var btnText = document.getElementById("btnText");

  jQuery.easing.def = "easeOutCubic";
  $("html, body").animate({
    scrollTop: $("#destination").offset().top
  }, 3000, "easeInOutQuint"); 

  console.log("hit");
}

function empty(){
    /*make smaller */
    console.log(btnText);
    btnText.innerHTML = "welcome";
    
}

jQuery.easing['jswing'] = jQuery.easing['swing'];

$.easing = Object.assign({}, $.easing, {
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
      return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
})