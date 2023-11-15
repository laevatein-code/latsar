var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000)
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

$('.carousel').on('slide.bs.carousel', function (event) {
  var height = $(event.relatedTarget).height();
  var $innerCarousel = $(event.target).find('.carousel-inner');
  
  $innerCarousel.animate({
    height: height
  });
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 0);
});