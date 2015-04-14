define(function(require, exports, module) {
	 module.exports = {
	 	  init: function() {
				courseNav();
				
	 	  }
	 }
	 var courseNav=function(){

	 	$(".courseNav-item").on("click","li",function(){
	 		if(!$(this).hasClass("active")){
	 			$(this).addClass("active").siblings().removeClass("active");
	 		}
	 	});
	 }
	 // var courseItem=function(){
	 // 	var courseLength=$('.course-item').length;
	 // 	for(var i=0;i<=courseLength;i++){
	 // 		$('.course-item')[i].hover(function(){
	 // 			// $('.course-caption .course-intro').css('display','block');
	 // 			alert(11)
	 // 	})
	 // 	}
	 	
	 // }
	
});