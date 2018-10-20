var locateButton = document.getElementById('location');
var orderButton = document.getElementById('order');
var locateText = document.getElementById('location-a');
var orderText = document.getElementById('order-a');

var dropDownButton = document.getElementById('location-nav');

function locateOver() {
    locateButton.classList.add('darkgray');
    locateText.classList.add('white-js');
}
function locateOut () {
    locateButton.classList.remove('darkgray');
    locateText.classList.remove('white-js');
}
function orderOver() {
    orderButton.classList.add('darkgray');
    orderText.classList.add('white-js');
}
function orderOut () {
    orderButton.classList.remove('darkgray');
    orderText.classList.remove('white-js');
}

locateButton.addEventListener('mouseover', locateOver);
locateButton.addEventListener('mouseout', locateOut);
orderButton.addEventListener('mouseover', orderOver);
orderButton.addEventListener('mouseout', orderOut);