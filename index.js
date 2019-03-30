var slider = document.getElementById('speed');
noUiSlider.create(slider, {
 start: [50],
 step: 1,
 orientation: 'horizontal', 
 range: {
   'min': [10],
   'max': [300]
 },
});

var sl2 = document.getElementById('nq');
noUiSlider.create(sl2, {
 start: 4,
 step: 1,
 orientation: 'horizontal', 
 range: {
   'min': 4,
   'max': 20
 },
});

sl2.noUiSlider.on('update', function (values, handle) {
    n = sl2.noUiSlider.get();
    n = parseInt(n) 
    reset();
});

slider.noUiSlider.on('update', function (values, handle) {
    speed = 10000 / slider.noUiSlider.get();
});

function set1(){
    qimg = q1;
}
function set2(){
    qimg = q2;
}
function set3(){
    qimg = q3;
}
function set4(){
    qimg = q4;
}
function set5(){
    qimg = q5;
}
function set6(){
    qimg = q6;
}