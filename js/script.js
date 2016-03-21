/**
 * Created by LUCAS on 18/03/2016.
 */
$( document ).ready(function() {
    //Ativa o menu no mobile
    $(".button-collapse").sideNav();
<<<<<<< HEAD
=======

    //Inicializando Parallax
    $('.parallax').parallax();
>>>>>>> gh-pages
    var telaAlt = $( window ).height();
    // Aplica o tamanho da foto de acordo com a tela
    $('.home').css('height',telaAlt);

    /*var menuAlt = $('.menuSite').height();

    var contentHomeAlt = telaAlt - menuAlt;
    $('.contentHome').css('height',contentHomeAlt);*/
<<<<<<< HEAD
});
=======
});

$(document).ready(function(){
  				 $('.ancora').click(function(){
     			 var alvo = $(this).attr('href').split('#').pop();
      		$('html, body').animate({scrollTop: $('#'+alvo).offset().top }, 1000);
      		return false;
        });
		});
>>>>>>> gh-pages
