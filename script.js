// WE MATCH EACH SITE TO THE CORRECT CARD NUMBER 
var openLink1 = document.getElementById('link1');
var openLink2 = document.getElementById('link2');
var openLink3 = document.getElementById('link3');
var openLink4 = document.getElementById('link4');
var openLink5 = document.getElementById('link5');
var openLink6 = document.getElementById('link6');
var openLink7 = document.getElementById('link7');
var openLink8 = document.getElementById('link8');
var openLink9 = document.getElementById('link9');
var openLink10 = document.getElementById('link10');
var openLink11 = document.getElementById('link11');

// MATCH EVERY BUTTON WITH THE LINK FOR THE MODAL
const links = [
    {
        button:"btn-modal",
        link:openLink1.href
    },
    {
        button:"btn-modal1",
        link:openLink2.href
    },
    {
        button:"btn-modal2",
        link: openLink3.href
    },
    {
        button:"btn-modal3",
        link: openLink4.href
    },
    {
        button:"btn-modal4",
        link: openLink5.href
    },
    {
        button:"btn-modal5",
        link: openLink6.href
    },
    {
        button:"btn-modal6",
        link: openLink7.href
    },
    {
        button:"btn-modal7",
        link: openLink8.href
    },
    {
        button:"btn-modal8",
        link: openLink9.href
    },
    {
        button:"btn-modal9",
        link: openLink10.href
    },
    {
        button:"btn-modal0",
        link: openLink11.href
    },   
];

var selection = "";

//OPEN MODAL SCRIPT
//WE CANT MAKE A CLASS MODAL CAUSE IT RUINS THE CC LAYOUT SO WE DO 11 DIFF MODALS FOR EACH CARD
document.getElementById('btn-modal').addEventListener('click', function(event){
    // SHOW THE MODAL
    document.querySelector('.msg-modal').style.display='flex';
    // FIND THE LINK FROM THE ARRAY
    for (let item of links) {
        if (item.button ==event.target.id) {
          selection = item.link; 
          break;
        }
      }
});
document.getElementById('btn-modal1').addEventListener('click', function(){
    document.querySelector('.msg-modal').style.display='flex';
    for (let item of links) {
        if (item.button === event.target.id) {
          selection = item.link; 
          break;
        }
      }
});

document.getElementById('btn-modal2').addEventListener('click', function(){
    document.querySelector('.msg-modal').style.display='flex';
    for (let item of links) {
        if (item.button === event.target.id) {
          selection = item.link; 
          break;
        }
      }
});
document.getElementById('btn-modal3').addEventListener('click', function(){
    document.querySelector('.msg-modal').style.display='flex';
    for (let item of links) {
        if (item.button === event.target.id) {
          selection = item.link; 
          break;
        }
      }
});
document.getElementById('btn-modal4').addEventListener('click', function(){
    document.querySelector('.msg-modal').style.display='flex';
    for (let item of links) {
        if (item.button === event.target.id) {
          selection = item.link; 
          break;
        }
      }
});
document.getElementById('btn-modal5').addEventListener('click', function(){
    document.querySelector('.msg-modal').style.display='flex';
    for (let item of links) {
        if (item.button === event.target.id) {
          selection = item.link; 
          break;
        }
      }
});
document.getElementById('btn-modal6').addEventListener('click', function(){
    document.querySelector('.msg-modal').style.display='flex';
    for (let item of links) {
        if (item.button === event.target.id) {
          selection = item.link; 
          break;
        }
      }
});
document.getElementById('btn-modal7').addEventListener('click', function(){
    document.querySelector('.msg-modal').style.display='flex';
    for (let item of links) {
        if (item.button === event.target.id) {
          selection = item.link; 
          break;
        }
      }
});
document.getElementById('btn-modal8').addEventListener('click', function(){
    document.querySelector('.msg-modal').style.display='flex';
    for (let item of links) {
        if (item.button === event.target.id) {
          selection = item.link; 
          break;
        }
      }
});
document.getElementById('btn-modal9').addEventListener('click', function(){
    document.querySelector('.msg-modal').style.display='flex';
    for (let item of links) {
        if (item.button === event.target.id) {
          selection = item.link; 
          break;
        }
      }
});
document.getElementById('btn-modal0').addEventListener('click', function(){
    document.querySelector('.msg-modal').style.display='flex';  
    for (let item of links) {
        if (item.button === event.target.id) {
          selection = item.link; 
          break;
        }
      }  
});

//CLOSE MODAL 
 document.querySelector('.cancel-button').addEventListener('click', function(){
    document.querySelector('.msg-modal').style.display='none';
   
});





//CREATE AN ARRAY FOR LINKS 


document.querySelector('.ok-button').addEventListener('click', function(){
    window.open(selection);
    document.querySelector('.msg-modal').style.display='none';
});



 


//SWIPER JAVASCRIPT

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

