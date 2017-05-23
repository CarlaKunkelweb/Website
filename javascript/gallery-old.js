function backHome() {
  window.open("index.html", "_self")
}

function backDrop(element) {
    let buttons = document.getElementsByClassName("nav-btn");
    let divs = document.getElementsByClassName("body-div");
    for(let i = 0; i < divs.length; i++) {
      if(i <= buttons.length-1) {
        buttons[i].classList.add("nav-btn-animated");
        buttons[i].classList.remove("nav-btn-no-anim");
      }
      divs[i].classList.add("no-display");
    }
    let id = element.id
    id = id.toString();
    element.classList.remove("nav-btn-animated");
    element.classList.add("nav-btn-no-anim");
    document.getElementsByClassName(id)[0].classList.remove("no-display");
}

backDrop(document.getElementById("corkwood"));
