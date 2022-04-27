$(document).ready(() => {

  //MENU
  $('.navbar__menu-btn').on('click', function () {
    $('.navbar__links').toggleClass('.active');
    $(this).find('i').toggleClass('fa-bars');
    $(this).find('i').toggleClass('fa-times');
  });

  //CARROSSEL
   const slickOptions = {
       autoplay: true,
       autoplaySpeed: 3000,
      dots: false,
      prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
      nextArrow: '<button type="button" class="slick-next slider__next-arrow">Previous</button>;',
    };
    $(".slider").slick(slickOptions);

    $('footer__form-button').on('click', () =>{
      const email = $('#email').val();
      Email.send({
        Host: "smtp.yourisp.com",
        Username: "username",
        Password: "password",
        to: "contato@studion.com",
        From: email,
        Subject: "Por favor me adicione na newsletter",
        Body: `Olá,
        Eu gostaria de ser adicionado à newsletter do site.
        Meu email é ${email}.
        
        Obrigado!
        `,
      }) .then(
        (message) => alert(message),
      );
    })
  });