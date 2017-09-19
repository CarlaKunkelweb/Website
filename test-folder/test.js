function openHome() {
  window.open("index.html", "_self")
}

var state = {
  scrollAnimated: false,
  scrollTimeout: null,
  imagesAnimated: false,
  imagesTimout: null,
  currentImage: null,
  albumLink: null
}


//Function on a settimeout to animate the scrollbar of the carousel
function animateScrollbar(passedCount) {

  //Initiating the count variable, if the function has been called recursievely, then the value that was passed is then assigned to count
  var count = 0
  if(passedCount) {
    count = passedCount
  }

  //Array containing different div elements
  var carouselDivs = [
    "#carousel-position-component-animator-corkwood", "#carousel-position-component-animator-duval", "#carousel-position-component-animator-mahoney", "#carousel-position-component-animator-extra"
  ]

  //Adding styling to the scrollbar
  $(carouselDivs[count]).css({
    'animation' : 'scrollbar-anim 5s forwards'
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
  state.scrollbarTimeout = setTimeout(animateScrollbar, 5100, count)
}


//Cycling through the different images for the main-carousel-image
function animateImages(passedCount) {

  //Variable calling, see animateScrollbar for description of code mechanics
  var count = 0
  if(passedCount) {
    count = passedCount
  }

  //Sources for images for main-carousel-image-container
  var imageSource = [
    '../images/Corkwood/1-m.jpg', '../images/Duval/1-m.jpg', '../images/Money/1-m.jpg', '../images/Extra/1-m.jpg'
  ]

  var albumLink = [
    'Corkwood.html','Duval.html', 'Money.html', 'Exra.html'
  ]


  //Checking if images have started their animation cycle
  if(state.imagesAnimated) {

    //Assigning the second-carousel-image with the image source
    $('#second-carousel-image').css({
      'background-image' : 'url(' + imageSource[count] + ')'
    })
    if(count > 0) {
      $('#main-carousel-image').css({
        'background-image' : 'url(' + imageSource[count-1] + ')'
      })
    }
    if(count === 0) {
      $('#main-carousel-image').css({
        'background-image' : 'url(' + imageSource[3] + ')'
      })
    }


    // //Animating second-carousel-image
    if($("#second-carousel-image").css('animation-name') === 'second-image-anim-2') {
      $('#second-carousel-image').css({
        'animation' : 'second-image-anim-1 4s forwards'
      })
    }
    if($("#second-carousel-image").css('animation-name') === 'second-image-anim-1') {
      $('#second-carousel-image').css({
        'animation' : 'second-image-anim-2 4s forwards'
      })
    }
    if($("#second-carousel-image").css('animation-name') === 'none') {
      $('#second-carousel-image').css({
        'animation' : 'second-image-anim-1 4s forwards'
      })
    }

  } else {
    $('#main-carousel-image').css({
      'background-image' : 'url(' + imageSource[0] + ')'
    })
  }


  //Setting the image source for state
  state.currentImage = imageSource[count]

  //Setting the album link for state
  state.albumLink = albumLink[count]

  //Increasing count if it is not the last, if it is then resetting the count
  if(count === 3) {
    count = 0
  }
  else {
    count++
  }

  //Setting state to show images have animated
  state.imagesAnimated = true

  //Recursively calling function on timer
  state.imagesTimeout = setTimeout(animateImages, 5100, count)
}

//Function to handle click of scrollbar
function imageClick() {
  clearTimeout(state.imagesTimeout)
  clearTimeout(state.scrollbarTimeout)
  window.open(state.albumLink)
}


//Scrollbar animation
$(window).ready( function() {

  //Initiating the scrollBar animation
  animateScrollbar()

  //Initiating the main-carousel-image animation
  animateImages()

})
