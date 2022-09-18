//oo wee oo... wee

window.onload = function(){

  var btnText = document.getElementById("btnText");

  
  //jQuery.easing.def = "easeInOutQuint";
  $("html, body").animate({
    scrollTop: $("#destination").offset().top
  }, 1000, "easeInOutQuint"); 
  
}

/*
var scroll = new SmoothScroll('a[href*="#"]',{
  easing: 'easeInOutQuint'
});
*/

function empty(){
    /*make smaller */
    console.log(btnText);
    btnText.innerHTML = "welcome";
    
}



jQuery.easing['jswing'] = jQuery.easing['swing'];

$.easing = Object.assign({}, $.easing, {
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
      console.log('hit');
      return c/2*((t-=2)*t*t*t*t + 2) + b;
    },
})


/*
let called = false
document.addEventListener("scroll", e => {
  if (document.documentElement.scrollTop >= 2000) {
    if (called) return
    called = true
    $("#particles-js").css({
      position:'fixed',
      top:0
    })
  }
  if (document.documentElement.scrollTop < 2000) {
    called=false;
  }
})
*/