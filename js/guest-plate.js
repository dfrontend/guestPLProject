// host profile desktop ht function
function myfunc_name() {
    //do stuff here
    var hostthumbht = $('.host-photos.desktop .thumbs-pic-wrap').height();
    $('.host-photos.desktop .large-pic-wrap .item').css('height', hostthumbht);

    $('.module-about .about-dtl').css('min-height', hostthumbht);
}

$(document).ready(function () {

//bootstrap dropdown show selected value
    $(".dropdown .dropdown-menu li a").click(function () {
        $(this).parent().parent().parent().find("button .btn-value").text($(this).text());
        $(this).parent().parent().parent().find("button .btn-value").val($(this).text());
    });

//touch/click effects
    $(".rippler").rippler();

// home page /search result page item hide images of index greater than 5 on desktop - show only 6
    $(".local-host .host-images ul").find('li:gt(5)').hide();


// srch result item mobile images slider
    $('.search-result-item').each(function () {
        $(this).find("div.item:gt(5)").hide();
    });


// result page heights
    var srchheight = $('.search-results-wrapper').height();
    //console.log(srchheight);

//apply search result wrap height to map section to make them equal
    $('.map-results').css('height', srchheight);


// typeahead for modify search home and search result page
    var dataSource = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('country'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: {
            url: "http://jsbin.com/nepazu/1.json"
        }
    });

//variable initialize
    dataSource.initialize();

//typeahead initialize
    $('.typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    }, {
        displayKey: 'country',
        source: dataSource.ttAdapter()

    });


// home local host slick slider hide on loading
    $('.single-item.host, .single-item.testimo').hide();

// home local host slick slider initiate
    $('.single-item.host').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        // fade: true
    });

// home local host slick slider show
    $('.single-item.host').show();

// home testimonial slick slider initiate
    $('.single-item.testimo').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        // fade: true
    });

// home testimonial slick slider show
    $('.single-item.testimo').show();





//only mobile devices 767 and lower
    var wWidth = $(window).width();

//more than or equal to  768
    if (wWidth >= 768) {
        // host profile desktop ht
        myfunc_name();
        //alert('desktiop');

        // host profile item host photos show only 6 thumbs
        $(".host-photos.desktop .slider-for div.item:gt(0), .host-photos .slider-nav div.item:gt(5)").hide();

        //unslick host photos on desktop
        $('.host-photos.desktop .slider-for').slick('unslick');
        $('.host-photos.desktop .slider-nav').slick('unslick');


        //$('.module-about .about-dtl').css('height', 'hostthumbht');

    }


//mobile tablets
    if (wWidth <= 767) {
        //alert('767');

        $('.host-photos.desktop').removeClass('desktop');

        // hide images of index greater than 1 on mobile - show only 2
        $(".local-host .host-images ul").find('li:gt(1)').hide();

        // srch result item host images show more than 6 thumbs which was hidden on desktop
        $(".search-result-item .host-images div.item:gt(5)").show();

        // search results item host imges slick slider initiate on mobile
        $('.search-result-item .multiple-items').slick({
            slidesToShow: 5,
            slidesToScroll: 5,
            dots: false,
            arrows: true
        });


        //host profile photos
        $('.host-photos .slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.host-photos .slider-nav').slick({
            rows: 1,
            slidesPerRow: 1,
            slidesToShow: 3,
            slidesToScroll: 2,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            focusOnSelect: true,
            arrows: true
        });

    }

});

$(window).load(function () {
//host photo large image heights for desktop
    myfunc_name();

});

$(window).on("orientationchange", function (event) {
    //$( "#orientation" ).text( "This device is in " + event.orientation + " mode!" );
    myfunc_name();
});

