var locateButton = document.getElementById('location');
var orderButton = document.getElementById('order');
var locateText = document.getElementById('location-a');
var orderText = document.getElementById('order-a');
var locateDrop = document.getElementById('location-container');
var dropDownButton = document.getElementById('location-container');
var grids = document.querySelectorAll('#grid1, #grid2, #grid3, #grid4, #grid5, #grid6');

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
    grids.classList.add('js-hover');
}
function outGrid() {
    grids.classList.remove('js-hover');
}



locateButton.addEventListener('mouseover', locateOver);
locateButton.addEventListener('mouseout', locateOut);
orderButton.addEventListener('mouseover', orderOver);
orderButton.addEventListener('mouseout', orderOut);
locateButton.onclick = navDropDown;
grids.addEventListener('mouseover', overGrid);
grids.addEventListener('mouseout', outGrid);