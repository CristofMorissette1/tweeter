$(document).ready(function() {
   

    var $textMax= 140;
  $(".counter").html($textMax);

  $("textarea").keydown (function(evt) {
      var $textLength = evt.target.value.length;
      var $textRemaining = $textMax - $textLength;

      if ($textRemaining < 0) {
        $(".counter").css('color', 'red');
      } else {
        $('.counter').css('color', '#244751');
      }

    $(".counter").html($textRemaining);
    }); 
});

