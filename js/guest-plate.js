 $(function(){

    $(".search-module .dropdown-menu li a").click(function(){

      $("button#category .btn-value").text($(this).text());
      $("button#category .btn-value").val($(this).text());

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
              $(".host-images ul").find('li:gt(1)').hide();
            }

});