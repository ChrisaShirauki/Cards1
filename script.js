new Swiper('.wrapper', {
   
    loop: true,
    spaceBetween: 30,
  
    //Pagination Bullets

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynmamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Responive points for multiple devices

    breakpoints:{
        0: {
            slidesPerView: 1
        },
        770: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },

    }
  });