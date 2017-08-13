function openHome() {
  window.open("index.html", "_self");
}

//Album Functionality
function showAlbum(album) {
  function changeBody() {
    $("#body-container").css({
      "display" : "none"
    })
    $("#albums-container").css({
      "display" : "block"
    })
    $("#back-to-albums").css({
      "display" : "block"
    })
    $(".album").css({
      "animation" : ""
    })
  }
  if(album == "Corkwood") {
    $("#album-card-corkwood").css({
      "animation" : "grey-out 0.8s forwards"
    })
    setTimeout(function() {
      $("#album-corkwood").removeClass("hide")
      changeBody()
    }, 1000)
  }
  if(album == "Money") {
  $("#album-card-money").css({
    "animation" : "grey-out 0.8s forwards"
  })
  setTimeout(function() {
    $("#album-money").removeClass("hide")
    changeBody()
  }, 1000)
  }
  if(album == "Duval") {
  $("#album-card-duval").css({
    "animation" : "grey-out 0.8s forwards"
  })
  setTimeout(function() {
    $("#album-duval").removeClass("hide")
    changeBody()
  }, 1000)
  }
  if(album == "Extra") {
  $("#album-card-extra").css({
    "animation" : "grey-out 0.8s forwards"
  })
  setTimeout(function() {
    $("#album-extra").removeClass("hide")
    changeBody()
  }, 1000)
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
      $("body").one("click", function() {
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
