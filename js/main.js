var locateButton = document.getElementById('location');

function mouseOver() {
    locateButton.classList.add('darkgray');
}
function mouseOut () {
    locateButton.classList.remove('darkgray');
}

locateButton.addEventListener('mouseover', mouseOver);
locateButton.addEventListener('mouseout', mouseOut);
