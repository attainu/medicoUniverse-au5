var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position);
        })
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
var hnames = []
$('#hospitalsearch').focus(function () {
    var auto = [];
    $.ajax({
        type: "GET",
        url: "/json",
        data: "JSON",
        success: function (response) {
            response.forEach(element => {
                auto.push(element.hname)
            });
            $("#hospitalsearch").autocomplete({
                source: auto
            });
            hnames = auto
        }
    });
});

//custom

