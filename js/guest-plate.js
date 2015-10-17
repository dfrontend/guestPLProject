 $(document).ready(function() {

//bootstrap dropdown show selected value
   //  $(".dropdown .dropdown-menu li a").click( function(){

   //    $(this).parent().parent().parent().find("button .btn-value").text($(this).text());
   //    $(this).parent().parent().parent().find("button .btn-value").val($(this).text());

   // });

//touch/click effects
  $(".rippler").rippler();

// home page /search result page item hide images of index greater than 5 on desktop - show only 6
  $(".local-host .host-images ul").find('li:gt(5)').hide();


// search result page hide images of index greater than 5 on desktop - show only 6
   //$(".search-result-item .host-images div.item:gt(5)").hide();


          // srch result item mobile images slider
     $('.search-result-item').each(function(){

        $(this).find("div.item:gt(5)").hide();
     })



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
        slidesToScroll: 1,
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
        slidesToScroll: 1,
        // fade: true
});

// home testimonial slick slider show
$('.single-item.testimo').show();





//only mobile devices 767 and lower
    var wWidth = $(window).width();

    if( wWidth <= 767) {
       //alert('767');

       // hide images of index greater than 1 on mobile - show only 2
       $(".local-host .host-images ul").find('li:gt(1)').hide();

      // srch result item host images show more than 6 thumbs which was hidden on desktop
      $(".search-result-item .host-images div.item:gt(5)").show();

      // search results item host imges slick slider initiate on mobile
      $('.search-result-item .multiple-items').slick({
              slidesToShow: 5,
              slidesToScroll: 5,
              dots: false,
              arrows: true,
            
      });



    }

});
