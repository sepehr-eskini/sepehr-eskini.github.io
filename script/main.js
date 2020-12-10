var body = document.body;
var sideMenuButton = document.getElementById("side-menu-button");
var mainContainer = document.getElementsByClassName("main-container")[0];
var sideMenuContainer = document.getElementsByClassName("side-menu-container")[0];
var sideMenuCancelButton = document.getElementById("side-menu-cancel-button");
var sideMenuOpened = false;
let currentWidth = 0;
sideMenuButton.onclick = function() {
    if(sideMenuOpened) {
        body.style.marginLeft = "0px";
        //mainContainer.className = "main-container";
        sideMenuContainer.classList.remove("open-menu");
        sideMenuCancelButton.style.width = "0px";
        sideMenuOpened = false;
    } else {
        currentWidth = mainContainer.offsetWidth;
        mainContainer.style.position = "fixed";
        mainContainer.style.width = currentWidth;
        mainContainer.style.marginLeft = "270px";
        //mainContainer.className = "main-container-open-side";
        sideMenuContainer.classList.add("open-menu");
        sideMenuCancelButton.style.width = "calc(100% - 270px)";
        sideMenuOpened = true;
    }
}

sideMenuCancelButton.onclick = sideMenuButton.onclick;