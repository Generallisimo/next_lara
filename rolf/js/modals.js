
$(document).ready(function() { 

    $('[data-modal=serviceBtn]').on('click', function() {
        $('.overlay-services').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay-services').fadeOut();
    });
});


$(document).ready(function() { 

    $('[data-modal=questionBtn]').on('click', function() {
        $('.overlay-question').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay-question').fadeOut();
    });
});

$(document).ready(function() { 

    $('[data-modal=deliveryBtn]').on('click', function() {
        $('.overlay-delivery').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay-delivery').fadeOut();
    });
});

$(document).ready(function() { 

    $('[data-modal=investmentsBtn]').on('click', function() {
        $('.overlay-investments').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay-investments').fadeOut();
    });
});


$(document).ready(function() { 

    $('[data-modal=cooperationBtn]').on('click', function() {
        $('.overlay-cooperation').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay-cooperation').fadeOut();
    });
});
