/* Lang */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show__flag");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn__text')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show__flag')) {
        openDropdown.classList.remove('show__flag');
      }
    }
  }
};


// Hamburger
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__inner__nav__item__link'),
    hamburger = document.querySelector('.header__wrap__content__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});


// More text About Us
function moreAbout() {

  let moreAboutOne = document.getElementById("aboutTextOne");
  let moreAboutTwo = document.getElementById("aboutTextTwo");
  let btnAbout = document.getElementById("btnAbout");

  moreAboutOne.style.display = "block";
  moreAboutTwo.style.display = "block";
  btnAbout.style.display = "none";
}


// Autoplay 
const splide = new Splide( '.splide', {
  type   : 'loop',
  drag   : 'free',
  focus  : 'center',
  perPage: 3,
  arrows: false,
  autoWidth: true,
  pagination: false,
  gap: 40,
  autoScroll: {
      speed: 1,
  },
} );

splide.mount(window.splide.Extensions);


// Tabs
window.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsParent = document.querySelector('.tabheader__items');   
      
  function hideTabContent() {
      tabsContent.forEach (item => {
          item.classList.add('hide');
          item.classList.remove('show', 'fade');
      });

      tabs.forEach(item => {
          item.classList.remove('tabheader__item_active');
      });
  }

  function showTabContent(i = 0) {
      tabsContent[i].classList.add('show', 'fade');
      tabsContent[i].classList.remove('hide');
      tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent(0);

  tabsParent.addEventListener('click', (event) => {
      const target = event.target;

      if (target && target.classList.contains('tabheader__item')) {
          tabs.forEach((item, i) => {
              if (target == item ) {
                  hideTabContent();
                  showTabContent(i);
              }
          });
      }
  });
});

