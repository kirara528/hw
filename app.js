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