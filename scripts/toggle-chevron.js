function toggleChevron(e) {

    $(e.target)
        .prev('.panel-heading')
        .find(".indicator")
        .toggleClass('fa-minus-square-o fa-plus-square-o');
}
$('#accordion').on('shown.bs.collapse', toggleChevron);
$('#accordion').on('hidden.bs.collapse', toggleChevron);


$(document).on('click', 'a', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});