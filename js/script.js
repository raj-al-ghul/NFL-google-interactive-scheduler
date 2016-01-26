$(document).ready(function(){
	
	$('.tbl_table_header_slider li').click(function(){
		var tab_id = $(this).attr('data-tab');

		
		$('.tbl_table_header_slider li').removeClass('current');
		$('.tab-content').removeClass('current');

		$("#"+tab_id).addClass('current');
		$(this).addClass('current');
	})
	
	
	$(".tab-content .table-data").click(function(){
		var tab_id = $(this).attr('data-dropdown');
		var hasClass=$("#"+tab_id).hasClass("currentdropdown");
		$(".dropdown-content").removeClass("currentdropdown");
		
		if(hasClass){
			$("#"+tab_id).slideUp();
		}else{
			$("#"+tab_id).addClass("currentdropdown");
			$("#"+tab_id).slideDown();
		}
/*
		$('.tbl_table_header_slider li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');*/
		
		
	})

});

	
	$('.tbl_table_header_slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});