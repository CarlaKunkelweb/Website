function galleryLink() {
  window.open("Gallery.html", "_self");
}
function openAboutMe(){
  window.open("bio.html", "_self");
}

// display elements by scrolltop functionality
if($(window).width() > 1000) {

  $("#scroll-ind-container").css({
    "display" : "block"
  })

  $(window).scroll( function() {
    if($(window).scrollTop() > ($("#img-1").offset().top-($("#img-1").height()/1.5))) {
      $("#img-1").css({
        "transform" : "translatex(0)",
        "animation" : "fade-in 1.5s forwards"
      })
      $("#img-2").css({
        "transform" : "translatex(0)",
        "animation" : "fade-in 1.5s forwards"
      })
      $("#back-to-top-container").css({
        "animation" : "fade-in 2s forwards"
      })
    }
    if($(window).scrollTop() > ($("#img-3").offset().top*0.7)) {
      $("#img-3").css({
        "animation" : "fade-in 1.5s forwards"
      })
    }
    if($(window).scrollTop() > ($("#img-4").offset().top*0.75)) {
      $("#img-4").css({
        "transform" : "translatex(0)",
        "animation" : "fade-in 1.5s forwards"
      })
      $("#img-5").css({
        "transform" : "translatex(0)",
        "animation" : "fade-in 1.5s forwards"
      })
    }
    if($(window).scrollTop() > ($("#img-6").offset().top*0.8)) {
      $("#img-6").css({
        "animation" : "fade-in 1.5s forwards"
      })
    }
    if($(window).scrollTop() < ($("#img-1").offset().top-($("#img-1").height()/1.5))) {
      $("#back-to-top-container").css({
        "animation" : "fade-out 2s forwards"
      })
    }
  })
}

//SCroll To Top
function scrollToTop() {
  $('html,body').animate({
    scrollTop : 0
  }, 2000);
}
