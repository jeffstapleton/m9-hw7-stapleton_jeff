var locateButton = document.getElementById('location');
var orderButton = document.getElementById('order');
var locateText = document.getElementById('location-a');
var orderText = document.getElementById('order-a');

function locateOver() {
    locateButton.classList.add('darkgray');
}
function locateOut () {
    locateButton.classList.remove('darkgray');
}
function orderOver() {
    orderButton.classList.add('darkgray');
}
function orderOut () {
    orderButton.classList.remove('darkgray');
}

locateButton.addEventListener('mouseover', locateOver);
locateButton.addEventListener('mouseout', locateOut);
orderButton.addEventListener('mouseover', orderOver);
orderButton.addEventListener('mouseout', orderOut);