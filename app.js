//oo wee oo... wee
function scrollToAnchor(aid){
    console.log('yo');
    const destination = $("a[name='"+ aid +"']");
      $("#destination").animate({
        scrollTop: destination.offset().top
      },'slow');
}

$(document).on("click", "entrance", function(){
  scrollToAnchor('#destination');
})

function empty(){
    /*make smaller */
    console.log('hit');
}