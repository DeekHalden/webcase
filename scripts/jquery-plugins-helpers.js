jQuery(function() {
    var caret = $('.caret');

    $('#dropdown li a').on('click', function() {
        $('#container').html($(this).text()).append(caret);

    });

    $(function() {
        $(".phone-item").mask("+999 (99) 999-99-99");

    });


    $("#form").validate();
    $("#form-question").validate();


    $(document).ready(function() {
        var size = '';
        if ($(window).width() > 1200) {
            size = 'lg';
        } else if ($(window).width() < 1199 && $(window).width() > 480) {
            size = 'md';
        } else {
            size = 'sm';
        }
    });

    $(document).on('click', 'a', function(event) {
        event.preventDefault();
        
        if($(this).parents('#accordion').length) {
            return;
        }else {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top - 120
            }, 500);
            
        }
    });

    if($(window).width()<640){


        $('.form-item').on('click',function() {
            $('.navbar').addClass('hidden');
        })   
        $('.form-item').on('focusout',function() {
            $('.navbar').removeClass('hidden');
        })
 
    }
});