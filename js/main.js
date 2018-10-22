var locateButton = document.getElementById('location');
var orderButton = document.getElementById('order');
var locateText = document.getElementById('location-a');
var orderText = document.getElementById('order-a');
var locateDrop = document.getElementById('location-container');
var dropDownButton = document.getElementById('location-container');

var grid1 = document.getElementById('grid1');
var grid2 = document.getElementById('grid2');
var grid3 = document.getElementById('grid3');
var grid4 = document.getElementById('grid4');
var grid5 = document.getElementById('grid5');
var grid6 = document.getElementById('grid6');

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
    grid1.classList.add('js-hover');
}
function outGrid() {
    grid1.classList.remove('js-hover');
}
function overGrid2() {
    grid2.classList.add('js-hover');
}
function outGrid2() {
    grid2.classList.remove('js-hover');
}
function overGrid3() {
    grid3.classList.add('js-hover');
}
function outGrid3() {
    grid3.classList.remove('js-hover');
}
function overGrid4() {
    grid4.classList.add('js-hover');
}
function outGrid4() {
    grid4.classList.remove('js-hover');
}
function overGrid5() {
    grid5.classList.add('js-hover');
}
function outGrid5() {
    grid5.classList.remove('js-hover');
}
function overGrid6() {
    grid6.classList.add('js-hover');
}
function outGrid6() {
    grid6.classList.remove('js-hover');
}

locateButton.addEventListener('mouseover', locateOver);
locateButton.addEventListener('mouseout', locateOut);
orderButton.addEventListener('mouseover', orderOver);
orderButton.addEventListener('mouseout', orderOut);
locateButton.onclick = navDropDown;
grid1.addEventListener('mouseover', overGrid);
grid1.addEventListener('mouseout', outGrid);
grid2.addEventListener('mouseover', overGrid2);
grid2.addEventListener('mouseout', outGrid2);
grid3.addEventListener('mouseover', overGrid3);
grid3.addEventListener('mouseout', outGrid3);
grid4.addEventListener('mouseover', overGrid4);
grid4.addEventListener('mouseout', outGrid4);
grid5.addEventListener('mouseover', overGrid5);
grid5.addEventListener('mouseout', outGrid5);
grid6.addEventListener('mouseover', overGrid6);
grid6.addEventListener('mouseout', outGrid6);