$(document).ready(function(){
    $('#disclaimer').modal();
    $('#impressum').modal();
    $('#datenschutz').modal();
});

$(document).ready(function(){
    $('.tooltipped').tooltip();
});

$(document).ready(function(){
    $('select').material_select();
});

$(document).ready(function(){
    $('.carousel').carousel({
        indicators: true,
    });
});

$(function () {

    $("#emailForm").submit(function (e) {
        e.preventDefault();
        var form_data = $(this).serialize();
        $.ajax({type: "POST", url: "sendEmail.php", dataType: "json", data: form_data}).done(function (data) {
            Materialize.toast('Nachricht gesendet :)', 4000);
        }).fail(function (data) {
            Materialize.toast('Nachricht nicht gesendet!', 4000);
        });
    });
});

$(document).ready(function (listener) {
    $('.button-collapse').sideNav();
    $('.scrollspy').scrollSpy();
    const options = [
        {
            selector: '.main-text', offset: 0, callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        }
    ];



    Materialize.scrollFire(options);

      $(window).scroll(function() {
     //   var x = document.getElementsByClassName("navbar ul li a");
        if($(this).scrollTop() > 50) {
            $("#logo-picture").addClass('logo-size');
        } else {
        }
    });
});

const position = [48.216274, 16.3915678];
const centerPosition = [48.2169578, 16.4230718];

function mapsInit() {

    const latLng = new google.maps.LatLng(position[0], position[1]);
    const centerLatLng = new google.maps.LatLng(centerPosition[0], centerPosition[1]);


    const mapOptions = {
        zoom: 14,
        streetViewControl: false,
        scaleControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: centerLatLng
    };

    map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'Hedwiggasse 4/26, 1020 Wien',
        draggable: false,
        animation: google.maps.Animation.DROP
    });
}
