function initMap() {
    // Create a map object and specify the DOM element for display.
    var center = {
        lat: 40.744686,
        lng: -74.185572
    }
    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        zoom: 16,
        disableDefaultUI: true,
        scrollwheel: false
    });

    var marker = new google.maps.Marker({
        position: center,
        map: map,
        icon: './images/orange-pin.png'
    })
}