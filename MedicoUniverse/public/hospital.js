var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
            console.log(position);
            $.get( 'https://nominatim.openstreetmap.org/reverse?lat='+position.coords.latitude+'='+position.coords.longitude+'&format=json', function( data ) {
                console.log(data);
            });
        })
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
