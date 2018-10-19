var locateButton = document.getElementById('location');

function locateOver() {
    locateButton.classList.add('darkgray');
}
function locateOut () {
    locateButton.classList.remove('darkgray');
}

locateButton.addEventListener('mouseover', locateOver);
locateButton.addEventListener('mouseout', locateOut);
