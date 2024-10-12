// $(document).ready(function(){

// 	$(window).scroll(function(){

// 		if($(window).scrollTop() > 40)
// 		{
// 			$(".top_arrow").fadeIn();
// 			$(".fix_nav").css("position", "fixed");
// 			$(".fix_nav").css("top", 0);
// 			$(".fix_nav").css("z-index", "9999999");
// 			$(".fix_nav").css("background-color", "rgb(0 59 153 / 85%)");
// 			$(".fix_nav").css("box-shadow", "rgb(0 0 0 / 8%) 0px 0.125rem 0.25rem");
// 			$('#cssmenu>ul>li.has-sub>a').addClass('bg-black');
// 			$("#cssmenu>ul>li>a").css("color", "#fff");
// 			$("#logo").attr("src", "images/logo.png");


// 		}
// 		else
// 		{
// 			$(".top_arrow").fadeOut();
// 			$(".fix_nav").css("top", "inherit");
// 			$(".fix_nav").css("position", "absolute");
// 			$(".fix_nav").css("background-color", "transparent");
// 			$(".fix_nav").css("box-shadow", "none");
// 			$(".logo2 .fa").css("color", "#000");
// 			$('#cssmenu>ul>li.has-sub>a').removeClass('bg-black');
// 			$("#cssmenu>ul>li>a").css("color", "#fff");
// 			$("#logo").attr("src", "images/logo.png");
// 		}
// 	});

$(document).ready(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 40) { 
			$(".top_arrow").fadeIn();
			$(".fix_nav").css("position", "fixed");
			$(".fix_nav").css("top", 0);
			$(".fix_nav").css("z-index", "9999999");
			$(".fix_nav").css("background-color", "#fff");
			$(".fix_nav").css("box-shadow", "rgb(0 0 0 / 8%) 0px 0.125rem 0.25rem");
			$('#cssmenu>ul>li.has-sub>a').addClass('bg-black');
			$("#cssmenu>ul>li>a").css("color", "#000");
			$("#logo").attr("src", "images/logo2.png");
		}
		else { 
			// for top
			$(".top_arrow").fadeOut();
			$(".fix_nav").css("top", "inherit");
			$(".fix_nav").css("position", "absolute");
			$(".fix_nav").css("background-color", "transparent");
			$(".fix_nav").css("box-shadow", "none");
			$(".logo2 .fa").css("color", "#000");
			$('#cssmenu>ul>li.has-sub>a').removeClass('bg-black');
			$("#cssmenu>ul>li>a").css("color", "#000");
			$("#logo").attr("src", "images/logo.png");
		}
	})

//////////////////////////////////////

$(".top_arrow").click(function () {
	$("body,html").animate({
		"scrollTop": 0
	});
});	
});
