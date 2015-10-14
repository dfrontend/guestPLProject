 $(document).ready(function() {

    $(".dropdown .dropdown-menu li a").click( function(){

      $(this).parent().parent().parent().find("button .btn-value").text($(this).text());
      $(this).parent().parent().parent().find("button .btn-value").val($(this).text());

   });

    $(".rippler").rippler({
    // effectClass      :  'rippler-effect'
    // ,effectSize      :  5      // Default size (width & height)
    // ,addElement      :  'svg'   // e.g. 'svg'(feature)
    // ,duration        :  300
  });

    $(".host-images ul").find('li:gt(5)').hide();

    //carousel swipe on mobile
    $('.carousel').bcSwipe({ threshold: 50 });

// result page heights
    var srchheight = $('.search-results-wrapper').height();
    //console.log(srchheight);
    $('.map-results').css('height', srchheight);




// typeahead
var dataSource = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('country'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: {
            url: "http://jsbin.com/nepazu/1.json"
        }
    });


    dataSource.initialize();

$('.typeahead').typeahead({
          hint: true,
          highlight: true,
          minLength: 1
    }, {
        displayKey: 'country',
        source: dataSource.ttAdapter()                                      

    });


// $('.typeahead').typeahead(null, {
//   name: 'countries',
//   display: function(countries) {
//     return countries.country.country_name;        
//   },
//    source: countries.ttAdapter(),
//   templates: {
//     empty: [
//       '<div class="empty-message">',
//         'no match',
//       '</div>'
//     ].join('\n'),
//     suggestion: Handlebars.compile('<div><strong>{{name}}</strong> – {{code}}</div>')
//   }
// });



// home local host slick slider
$('.single-item.host, .single-item.testimo').hide();

$('.single-item.host').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
});

$('.single-item.host').show();

// home testimonial slick slider
$('.single-item.testimo').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
});
$('.single-item.testimo').show();




//only mobile devices
    var wWidth = $(window).width();

    if( wWidth <= 767) {
     //alert('767');

     // hide images of index greater than 1 on mobile
     $(".local-host .host-images ul").find('li:gt(1)').hide();

    // srch result item mobile images slider
     $('.search-result-item').each(function(){

        //console.log(itemliwidth);
        //console.log(itemlinumb);

        var itemliwidth = $(this).find('.host-images li').outerWidth(true);
        var itemlicount = $(this).find('.host-images li').length;

        $(this).find('.host-images ul').width(itemliwidth * itemlicount);
     })

    }

});
