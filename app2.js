 $('.autumn').on('click', function() {
  myFunc();
 })

  function myFunc(){
    micron.getEle(".autumn").interaction("tada").duration(".45").timing("ease-out");
 }

$(document).ready(function() {
  var sides = ['left'];
  console.log(sides);

  for (var i = 0; i < sides.length; ++i) {
    var cSide = sides[i];
    $('.sidebar.' + cSide).sidebar({side: cSide});
  }

  $(".btn[data-action]").on('click', function() {
    console.log('aaa');
    var $this = $(this);
    var action = $this.attr('data-action');
    var side = $this.attr('data-side');
    $('.sidebar.' + side).trigger('sidebar:' + action);
    return false;
  });
});
 
  
