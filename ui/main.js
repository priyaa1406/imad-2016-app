console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';


// Move the image 
var img = document.getElementById('mad');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = function () 
    img.style.marginLeft = '100px';
};