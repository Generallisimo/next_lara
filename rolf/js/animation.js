// Header
(function () {
    var titleMainOne = document.querySelector('.header');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('header-animation');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();


// Promo title 1
(function () {
    var titleMainOne = document.querySelector('.promo__wrap__title');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('h1-title-1');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();


// Promo Button
(function () {
    var titleMainOne = document.querySelector('.promo__wrap__btn');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('promo-btn');
        }
      });
    });
  
    observer.observe(titleMainOne);
  })
();