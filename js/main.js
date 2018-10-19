var menuButtons = document.getElementById('step6');

function mouseOver() {
    menuButtons.classList.add('darkgray');
}
function mouseOut () {
    menuButtons.classList.remove('darkgray');
}

menuButtons.addEventListener('mouseover', mouseOver);
menuButtons.addEventListener('mouseout', mouseOut);
