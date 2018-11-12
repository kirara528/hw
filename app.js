$('.ml2').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline()
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: function(el, i) {
      return 70*i;
    }
  });

$('.js-book').on('click', function() {
  let isBook = $(this).hasClass('js-book');

  showModal(isBook);
})

$('.js-modal-close').on('click', function() {
  closeModal();
})

function showModal(isBook) {
  $('.js-modal-close').fadeIn(1000);
  $('.modal-content').fadeIn(1000);
}

function closeModal() {
  $('.js-modal-close').fadeOut(1000);
  $('.modal-content').fadeOut(1000);
}

$(function() {
  $('#datepicker').datepicker();
})

