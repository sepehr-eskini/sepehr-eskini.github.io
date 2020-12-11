var body = document.body;
var sideMenuButton = document.getElementById("side-menu-button");
var mainContainer = document.getElementsByClassName("main-container")[0];
var sideMenuContainer = document.getElementsByClassName("side-menu-container")[0];
var sideMenuCancelButton = document.getElementById("side-menu-cancel-button");
var sideMenuOpened = false;
sideMenuButton.onclick = function() {
    if(sideMenuOpened) {
        mainContainer.className = "main-container";
        sideMenuContainer.classList.remove("open-menu");
        sideMenuCancelButton.style.width = "0px";
        sideMenuOpened = false;
    } else {
        mainContainer.className = "main-container-open-side";
        sideMenuContainer.classList.add("open-menu");
        sideMenuCancelButton.style.width = "calc(100% - 270px)";
        sideMenuOpened = true;
    }
}
sideMenuCancelButton.onclick = sideMenuButton.onclick;

var sideMenuParentItem = document.getElementsByClassName("side-menu-parent-item");
var sideMenuSubItemContainer = document.getElementsByClassName("side-menu-sub-item-container");
var sideMenuParentItemCount = sideMenuParentItem.length;
for(let i = 0 ; i < sideMenuParentItemCount ; i++) {
    sideMenuParentItem[i].onclick = function() {
        if(sideMenuSubItemContainer[i].classList.contains("show")) {
            sideMenuSubItemContainer[i].classList.remove("show");
            sideMenuParentItem[i].children[0].children[0].classList.remove("fa-angle-down");
            sideMenuParentItem[i].children[0].children[0].classList.add("fa-angle-left");
        } else {
            sideMenuSubItemContainer[i].classList.add("show");
            sideMenuParentItem[i].children[0].children[0].classList.remove("fa-angle-left");
            sideMenuParentItem[i].children[0].children[0].classList.add("fa-angle-down");
        }
    }
}