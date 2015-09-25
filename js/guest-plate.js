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

});