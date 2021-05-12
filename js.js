$(document).ready(function () {
  // Simple image pop-up
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-img-mobile',
    image: {
      verticalFit: true,
    },
  });

  // inline popup
  $('.inline-popup').magnificPopup({
    type: 'inline',
  });
});
