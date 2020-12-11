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
    var parentExpand = [];
    sideMenuParentItem[i].onclick = function() {
        if(parentExpand[i]) {
            sideMenuSubItemContainer[i].style.height = 0;
            sideMenuSubItemContainer[i].style.display = "none";
            sideMenuParentItem[i].children[0].id = "";
            sideMenuParentItem[i].children[0].children[1].classList.remove("fa-angle-down");
            sideMenuParentItem[i].children[0].children[1].classList.add("fa-angle-left");
            parentExpand[i] = false;
        } else {
            sideMenuSubItemContainer[i].style.display = "block";
            sideMenuSubItemContainer[i].style.height = sideMenuSubItemContainer[i].scrollHeight + "px";
            sideMenuParentItem[i].children[0].id = "active-parent";
            sideMenuParentItem[i].children[0].children[1].classList.remove("fa-angle-left");
            sideMenuParentItem[i].children[0].children[1].classList.add("fa-angle-down");
            parentExpand[i] = true;
        }
    }
}

