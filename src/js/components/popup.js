import helpers from '../helpers';

function overlayInit() {
  helpers.$body.append('<div class="overlay"></div>');
  helpers.lockScroll(true, helpers.$body.find('.modal'), 'modal');
}

function overlayDestroy() {
  helpers.$body.find('.overlay').remove();
  helpers.lockScroll(false, helpers.$body.find('.modal'), 'modal');
}

$('.js-modal-session').on('click', function() {
  $('#session').show();
  overlayInit();
});

$('.js-modal-product').on('click', function() {
  $('#product').show();
  overlayInit();
});

$('.modal__close').on('click', function() {
  $(this).closest('.modal').hide();
  overlayDestroy();
});

$(document).on('mouseup', function(e){
  var modal = $( ".modal" );
  let modalDatePicker = $('.datepicker-container');
  if ( 
    !modal.is(e.target) && 
    modal.has(e.target).length === 0 && 
    !modalDatePicker.is(e.target) && 
    modalDatePicker.has(e.target).length === 0
    ) 
  {
    modal.hide();
    overlayDestroy();
  }
});

helpers.$document.on('keydown', function(e) {
  var modal = $( ".modal" );
	if( e.keyCode == 27 ){
		modal.hide();
    overlayDestroy();
	}
});