$(document).ready(function() {
    // Inicializa cada galeria Owl Carousel
    $('.gallery').each(function() {
      var $carousel = $(this);
      var galleryNumber = $carousel.data('gallery');
  
      // Inicializar o Owl Carousel para esta galeria
      $carousel.owlCarousel({
        loop:false,
        margin: 10,
        autoWidth: true,
        autoHeight:true,
        nav: false,
        dots: false,
        lazyLoad: true,
        lazyLoadEager: 2,
        responsiveClass:true,
        autoplayHoverPause: true,
        autoplay: true,
    
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5,
            }
        }
      });
  
      // Verifica o estado inicial dos botões
      updateButtonsState($carousel, galleryNumber);
  
      // Controle do botão "Next"
      $('.next-gallery[data-gallery="' + galleryNumber + '"]').click(function() {
        $carousel.trigger('next.owl.carousel');
      });
  
      // Controle do botão "Prev"
      $('.prev-gallery[data-gallery="' + galleryNumber + '"]').click(function() {
        $carousel.trigger('prev.owl.carousel');
      });
  
      // Atualiza o estado dos botões ao mudar de slide
      $carousel.on('changed.owl.carousel', function() {
        updateButtonsState($carousel, galleryNumber);
      });
    });
  
    // Função para desabilitar/ativar botões
    function updateButtonsState($carousel, galleryNumber) {
      var carouselData = $carousel.data('owl.carousel');
      var current = carouselData.current();
      var max = carouselData.maximum();
      var min = carouselData.minimum();
  
      // Verifica e aplica a classe "disabled" no botão "Prev"
      if (current <= min) {
        $('.prev-gallery[data-gallery="' + galleryNumber + '"]').addClass('disabled').attr('disabled', true);
      } else {
        $('.prev-gallery[data-gallery="' + galleryNumber + '"]').removeClass('disabled').removeAttr('disabled');
      }
  
      // Verifica e aplica a classe "disabled" no botão "Next"
      if (current >= max) {
        $('.next-gallery[data-gallery="' + galleryNumber + '"]').addClass('disabled').attr('disabled', true);
      } else {
        $('.next-gallery[data-gallery="' + galleryNumber + '"]').removeClass('disabled').removeAttr('disabled');
      }
    }
  });
  