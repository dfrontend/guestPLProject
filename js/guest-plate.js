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

    $('.carousel').bcSwipe({ threshold: 50 });

    var wWidth = $(window).width();

    if( wWidth <= 767) {
     //alert('767');

     // hide images of index greater than 1 on mobile
     $(".local-host .host-images ul").find('li:gt(1)').hide();

    // srch result item mobile images slider
     var itemliwidth = $('.search-result-item .host-images li').outerWidth(true);

     var itemlinumb = $('.search-result-item .host-images li').length;

     //console.log(itemliwidth);
     //console.log(itemlinumb);

     $('.search-result-item .host-images ul').each(function(){
        $(this).width(itemliwidth * itemlinumb);
     })

    }

});
