var locateButton = document.getElementById('location');

function locateOver() {
    locateButton.classList.add('darkgray');
}
function locateOut () {
    locateButton.classList.remove('darkgray');
}

locateButton.addEventListener('mouseover', locateOver);
locateButton.addEventListener('mouseout', locateOut);


var orderButton = document.getElementById('order');

function orderOver() {
    orderButton.classList.add('darkgray');
}
function orderOut () {
    orderButton.classList.remove('darkgray');
}

orderButton.addEventListener('mouseover', orderOver);
orderButton.addEventListener('mouseout', orderOut);