function toggleChevron(e) {

    $(e.target)
        .prev('.panel-heading')
        .find(".indicator")
        .toggleClass('fa-minus-square-o fa-plus-square-o');
}
$('#accordion').on('shown.bs.collapse', toggleChevron);
$('#accordion').on('hidden.bs.collapse', toggleChevron);


