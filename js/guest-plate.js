 $(function(){

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


        var srchheight = $('.search-results-wrapper').height();
        //console.log(srchheight);
        $('.map-results').css('height', srchheight);


    var wWidth = $(window).width();

    //only mobile devices
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
