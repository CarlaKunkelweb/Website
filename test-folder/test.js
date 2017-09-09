function openHome() {
  window.open("index.html", "_self")
}

//Scrollbar animation
$(window).ready( function() {

  //Count to track index of carouselDivs in animateDivs function
  var count = 0;


  //Function on a settimeout to animate the scrollbar of the carousel
  function animateDivs() {
    //Variables
    //Array containing different div elements
    var carouselDivs = [
      "#carousel-position-component-animator-corkwood", "#carousel-position-component-animator-duval", "#carousel-position-component-animator-mahoney", "#carousel-position-component-animator-extra"
    ]


    //Adding styling to the scrollbar
    console.log(carouselDivs[count])
    $(carouselDivs[count]).css({
      'animation' : 'scrollbar-anim 3s forwards'
    })
    if(count > 0) {
      $(carouselDivs[count-1]).css({
        'animation' : ''
      })
    }
    if(count === 0) {
      $(carouselDivs[3]).css({
        'animation' : ''
      })
    }

    //Adding to count to continue the carousel
    if(count === 3) {
      count = 0
    }
    else {
      count++
    }
  }
  animateDivs()
  setInterval(animateDivs, 3100)

})
