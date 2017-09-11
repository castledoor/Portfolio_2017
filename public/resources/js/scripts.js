
$( document ).ready(function() {

	// $('.gallery-slider').slick({
	//     arrows: true,
	//     prevArrow:"<img class='prev slick-prev' src='./resources/images/arrow.png'>",
	//     nextArrow:"<img class='next slick-next' src='./resources/images/arrow.png'>",
	//     adaptiveHeight: true,
	//     responsive: true,
	//   });

 // var mySwiper = new Swiper ('.gallery-slider', {
 //      // Optional parameters
 //      direction: 'vertical',
 //      loop: true
 //    })         


// first letter yellow tagline
	var anchors = Array.from(document.getElementsByClassName("tag"));
	anchors.forEach(a => {
	  a.innerHTML =
	    a.textContent
	    .split(' ')
	    .map(word => {
	      if (word[0] != '\"' ) {
	        return `<span>${word[0]}</span>${word.substring(1)}`;
	      } else {
	        return word;
	      }
	    })
	    .join(' ');
	});


// order position gallery items



	var parents = document.getElementsByClassName("gallery-item-container");
    

	for (i = 0; i < parents.length; i++) { 
		var index_mod_first = i % 3;
		var index_mod_second = i % 3;
    	var index_mod_third = i % 3;



    	$(parents[i]).each(function() {
    		if (index_mod_first == 0) {
        		$(this).addClass('first');
        		var more_info_first = $(this).children().children().children()[0]
        		$(more_info_first).addClass('first-info-block');
    		}
		});


		$(parents[i]).each(function() {
    		if (index_mod_second == 1) {
        		$(this).addClass('second');
        		var more_info_second = $(this).children().children().children()[0]
        		$(more_info_second).addClass('second-info-block');
    		}
		});


    	$(parents[i]).each(function() {
    		if (index_mod_third == 2) {
        		$(this).addClass('third');
        		var more_info_third = $(this).children().children().children()[0]
        		$(more_info_third).addClass('third-info-block');
    		}
		});
	
	}

	$('.more-info-button').click(function() {
		var gallery = $(this).parent().parent().children()[1]
		var more_info = $(this).parent().parent().children()[0]
		$(gallery).toggleClass("more-info-fade-out more-info-fade-in");
		$(more_info).toggleClass('more-info-fade-out-words more-info-fade-in-words');
		var text = $(this).text();
		$(this).text( text == "Less Info ¬" ? "More Info ¬" : "Less Info ¬");
	});



	// gallery mouse in and out 


	// $('.gallery-item-container').mouseenter(function() {

	// 	var main_title = $(this).children().children()[0];
	// 	var gallery_hover = $(this).children().children()[1];

	// 	$(main_title).addClass('grow');
	// 	$(main_title).removeClass('shrink');

	

	// 	$(gallery_hover).fadeIn(400);


	// });

	// $('.gallery-item-container').mouseleave(function() {

	// 	var main_title = $(this).children().children()[0];
	// 	var gallery_hover = $(this).children().children()[1];

	// 	$(main_title).addClass('shrink');
	// 	$(main_title).removeClass('grow')

	// 	$(gallery_hover).fadeOut(400);

	// });


    
});