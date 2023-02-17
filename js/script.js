 jQuery(document).ready(function(){
    
    $(document).on('click', '#mer-toggle-open', function(){
      
      $('#mer-nav').addClass("w3-show");
      $(this).attr("id", "mer-toggle-close");
      $(this).find(" i").removeClass("fa fa-bars").addClass(" fa fa-times");

      $(document).on('click', '#mer-toggle-close', function(){
        $('#mer-nav').removeClass('w3-show');
        $(this).attr('id', 'mer-toggle-open');
        $(this).find(' i').removeClass('fa fa-times').addClass(' fa fa-bars');
      });

      $(document).on('click', '.mer-nav-close', function(){
        $('#mer-nav').removeClass('w3-show');
        $('#mer-toggle-close').attr('id', 'mer-toggle-open');
        $('#mer-toggle-open').find(' i').removeClass('fa fa-times').addClass(' fa fa-bars');
      });

    });

    $(document).on('click', '.mer-disable', function(event){
      $('#modal-disable').show();
      
      $('.w3-modal-close').click(function(){
        $('#modal-disable').hide();
      });
      event.preventDefault();
    });
  
    var currentYear = (new Date).getFullYear();
    $('#currentYear').text(currentYear);
});
