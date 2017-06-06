function openHome() {
  window.open("index.html", "_self");
}

//Album Functionality
function showAlbum(album) {
  $("#body-container").css({
    "display" : "none"
  })
  $("#albums-container").css({
    "display" : "block"
  })
  $("#back-to-albums").css({
    "display" : "block"
  })
  if(album == "Corkwood") {
    $("#album-corkwood").removeClass("hide")
  }
  if(album == "Money") {
    $("#album-money").removeClass("hide")
  }
  if(album == "Duval") {
    $("#album-duval").removeClass("hide")
  }
  if(album == "Extra") {
    $("#album-extra").removeClass("hide")
  }
}

function backToAlbums() {
  $(".album-content").addClass("hide")
  $("#body-container").css({
    "display" : "block"
  })
  $("#albums-container").css({
    "display" : "none"
  })
  $("#back-to-albums").css({
    "display" : "none"
  })
}

function enlargeImage(img) {
  if($(window).width() > 1100){
    if($("#" + img.id).hasClass("album-content-img-centered")) {
      $("body").one("click", ()=> {
        $("#" + img.id).removeClass("album-content-img-centered")
        $("#enlarged-image-shader").css({
          "display" : "none"
        })
        $("body").css({
          "overflow-y" : "scroll"
        })
      })
    }
    else {
      $("#" + img.id).addClass("album-content-img-centered")
      $("#enlarged-image-shader").css({
        "display" : "block"
      })
      $("body").css({
        "overflow-y" : "hidden"
      })
    }
  }
}

//Album Animations
