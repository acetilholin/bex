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
    $(".dropdown-content>li>a").css("color", themeColor);
});

$(document).ready(function(){
    $('.carousel').carousel({
        indicators: true,
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

  /*  $(window).scroll(function() {
        if($(this).scrollTop() > 300) {
            $('nav').removeClass('transparent trans');
            $('nav').addClass('base-color-1 solid');  /!* dark-blue solid *!/
        } else {
            $('nav').addClass('transparent trans');
            $('nav').removeClass('base-color-1 solid'); /!* dark blue solid *!/
        }
    });*/
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
