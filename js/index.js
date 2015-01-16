var button = $('article .button a')

function showNext() {
  $('article').nextUntil($this).show("slow");
}

button.click(showNext);

/*
button.click(function() {
  $('article').first().show("slow" , function showNext() {
    $(this).next('article').show("slow" , showNext);
  });
});
*/


// Pie Charts
$(function() {
  $('.chart').easyPieChart({
    scaleColor: false,
    lineWidth: 4,
    lineCap: 'round',
    barColor: '#333',
    size: 80,
    animate: 500
  });
});