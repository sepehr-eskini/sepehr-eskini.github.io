// Collapsible side menu items arrow changer
var changeArrow = document.getElementsByClassName("change-arrow");
var collapsibleHeader = document.getElementsByClassName("collapsible-header");

for (let index = 0; index < changeArrow.length; index++) {
    collapsibleHeader[index].onclick = function() {
        if(changeArrow[index].innerHTML == "keyboard_arrow_right") {
            changeArrow[index].innerHTML = "keyboard_arrow_down";
            for (let itr = 0; itr < changeArrow.length; itr++) {
                if(itr != index) {
                    changeArrow[itr].innerHTML = "keyboard_arrow_right";
                }
            }
        } else if (changeArrow[index].innerHTML == "keyboard_arrow_down") {
            changeArrow[index].innerHTML = "keyboard_arrow_right";
        }
    }
}

// New
