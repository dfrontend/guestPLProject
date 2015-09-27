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

    if( wWidth >= 768 && wWidth <= 992 ) {
                // code for tablet view
            } else if( wWidth >= 993 && wWidth <= 1200 ) {
                // code for mobile landscape
            } else if( wWidth <= 767 ) {
              alert('767.1');
                // code for mobile portrait
                $('.host-images ul li').hide().slice(0, 1).show();
            }

            if( wWidth <= 767) {
              alert('767');
              $('.host-images ul li').hide().slice(0, 1).show();
            }

});