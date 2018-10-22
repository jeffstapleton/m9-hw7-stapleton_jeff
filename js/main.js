var locateButton = document.getElementById('location');
var orderButton = document.getElementById('order');
var locateText = document.getElementById('location-a');
var orderText = document.getElementById('order-a');
var locateDrop = document.getElementById('location-container');
var dropDownButton = document.getElementById('location-container');
var container = document.getElementbyId("grid")
var hoverImages = document.getElementsByClassName('js-opacity');

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
function navDropDown() {
    dropDownButton.classList.toggle('show-nav');
}
function overGrid() {
    hoverImages.classList.add('js-hover');
}
function outGrid() {
    hoverImages.classList.remove('js-hover');
}



locateButton.addEventListener('mouseover', locateOver);
locateButton.addEventListener('mouseout', locateOut);
orderButton.addEventListener('mouseover', orderOver);
orderButton.addEventListener('mouseout', orderOut);
locateButton.onclick = navDropDown;
hoverImages.addEventListener('mouseover', overGrid);
hoverImages.addEventListener('mouseout', outGrid);