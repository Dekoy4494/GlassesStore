"use strict";

//wow.animate
new WOW().init(); 

$(document).ready(function () {

//slider
	$('.gs-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		dots: true,
	});

});
//another slider
$(document).ready(function () {

	$('.gs-partners__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		dots: false,
		autoplaySpeed: 500,
		pauseOnFocus: true,
	

	});
});

//hover effect logo//
const text = 'KALLYAS';

// this function turns a string into an array
const createLetterArray = (string) => {
  return string.split('');
}

// this function creates letter layers wrapped in span tags
const createLetterLayers = (array) => {
  return array.map((letter) => {
      let layer = '';
      //specify # of layers per letter
      for (let i = 1; i <= 2; i++) {
        // if letter is a space
        if(letter == ' '){
          layer += '<span class="space"></span>';
        }else{
          layer += '<span class="letter-'+i+'">'+letter+'</span>';
        }
      }
      return layer;
  });
}

// this function wraps each letter in a parent container
const createLetterContainers = (array) => {
  return array.map((item) => {
    let container = '';
    container += '<div class="wrapper">'+item+'</div>';
    return container;
  });
}

// use a promise to output text layers into DOM first
const outputLayers = new Promise(function(resolve, reject) {
      document.getElementById('text').innerHTML = createLetterContainers(createLetterLayers(createLetterArray(text))).join('');
      resolve();
});

// then adjust width and height of each letter
const spans = Array.prototype.slice.call(document.getElementsByTagName('span'));
outputLayers.then(() => {
    return spans.map((span) => {
      setTimeout(() => {
        span.parentElement.style.width = span.offsetWidth+'px';
        span.parentElement.style.height = span.offsetHeight+'px';
      }, 250);
    });  
}).then(() => {
    // then slide letters into view one at a time
    let time = 250;
    return spans.map((span) => {
      time += 75;
      setTimeout(() => {
        span.parentElement.style.top = '100px';
      }, time);
    });
});