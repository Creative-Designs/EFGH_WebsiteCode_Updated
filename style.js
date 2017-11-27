$(document).ready(function(){
//========================navigate smoothly============
	$("a").click(function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;

		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		  });
		} // End if
  });
  
    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
  
 //top btn
  $(window).scroll(function(){
	  
	  if
		  ($(this).scrollTop()>400){
			  $("#top_btn").fadeIn();
			  
		  }
		else{
			$("#top_btn").fadeOut();
			
		}
	  
	  
	  
	  
  });
	$("#top_btn").click(function(){
		$("body,html").animate({scrollTop:0},1000);
	});
/*=================slidetoggle=====================*/

$("#active_toggle").hide();
$("#active_toggle1").hide();
$("#active_toggle2").hide();

$(".less_woman").hide();
$(".less_prof").hide();
$(".less_health").hide();

//for web
$("#woman_para_show").hide();
$("#prof_para_show").hide();
$("#Seniors_para_show").hide();

$(".read_panel").click(function(){
	
	if($(".less_woman").is(':visible') === false)
	{
		$(".less_woman").show();
		$(".more_woman").hide();
		$(".less_prof").hide();
		$(".more_prof").show();
		$(".less_health").hide();
		$(".more_health").show();
		
	}
	else
	{
		$(".less_woman").hide();
		$(".more_woman").show();
	}

	$("#active_toggle").slideToggle();
	$("#active_toggle1").hide();
	$("#active_toggle2").hide();
	
	//for web
$("#woman_para_show").slideToggle();
$("#prof_para_show").hide();
$("#Seniors_para_show").hide();

});

$(".read_panel1").click(function(){
	if($(".less_prof").is(':visible') ===false)
	{
		$(".less_prof").show();
		$(".more_prof").hide();
		$(".less_woman").hide();
		$(".more_woman").show();
		$(".less_health").hide();
		$(".more_health").show();
		
	}
	else{
		$(".less_prof").hide();
		$(".more_prof").show();
	}
	$("#active_toggle").hide();
	$("#active_toggle1").slideToggle();
	$("#active_toggle2").hide();
	//for web
	$("#prof_para_show").slideToggle();
	$("#woman_para_show").hide();
	$("#Seniors_para_show").hide();
	
});

$(".read_panel2").click(function(){
	
	if($(".less_health").is(':visible') ===false){
		
		$(".less_health").show();
		$(".more_health").hide();
		$(".less_woman").hide();
		$(".more_woman").show();
		$(".less_prof").hide();
		$(".more_prof").show();
		
	}
	else{
		$(".less_health").hide();
		$(".more_health").show();
	}
	
	$("#active_toggle").hide();
	$("#active_toggle1").hide();
	$("#active_toggle2").slideToggle();
//for web
	$("#prof_para_show").hide();
	$("#woman_para_show").hide();
	$("#Seniors_para_show").slideToggle();
	
});
//==============read less about============
$(".read_less_about").hide();
$(".about_para_hide").hide();

$(".read_more_about").click(function(){
	$(".read_less_about").slideToggle();
$(".about_para_hide").slideToggle();
$(".read_more_about").hide();
	
});
$(".read_less_about").click(function(){
	$(".read_less_about").hide();
	$(".about_para_hide").hide();
	$(".read_more_about").show();
});

  
});