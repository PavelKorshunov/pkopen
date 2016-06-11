var width = 553;
var count = 1;

var carousel = document.getElementById('main_viewport');

var list = carousel.querySelector('ul');
var listElement = carousel.querySelectorAll('li');

var position = 0;

carousel.querySelector('.arrow_left').onclick = function() {
  position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
};


carousel.querySelector('.arrow_right').onclick = function() {
  position = Math.max(position - width * count, 
  -width * (listElement.length - count));
  list.style.marginLeft = position + 'px';
};