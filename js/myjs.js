//Бургер и активные ссылки
$(document).ready(function() {
    $(".header__burger").click(function (event) {
        $(".header__burger,.header__menu").toggleClass("active");
        $("body").toggleClass("lock");
    });
    
});

//CHECKBOX
	$.each($(".checkbox"), function(index, val){
		if($(this).find("input").prop("checked")==true) {
			$(this).addClass("active");
		}
	});
	$(document).on("click",".checkbox", function(event){
		if($(this).hasClass("active")){
			$(this).find("input").prop("checked",false);
		}
			else{
				$(this).find("input").prop("checked",true);
			}
			$(this).toggleClass('active');
		return false;
	});

	//RADIO
	$.each($(".radiobuttons__item"), function(index, val){
    if($(this).find("input").prop("checked")==true){
    	$(this).addClass("active");
    }
	});
$(document).on("click", ".radiobuttons__item", function(event){
	$(this).parents(".radiobuttons").find(".radiobuttons__item").removeClass("active");
	$(this).parents(".radiobuttons").find(".radiobuttons__item input").prop("checked",false);
	$(this).toggleClass("active");
	$(this).find("input").prop("checked",true);
return false;
});

//Аккордион
$(document).ready(function(){
    $(".accordion_head").click(function(event){
        if($(".accordion").hasClass("one")){
            $(".accordion_head").not($(this)).removeClass("active");
            $(".accordion_text").not($(this).next()).slideUp(300);
        }
        $(this).toggleClass("active").next().slideToggle(300);
    });
});

//Слайдер
$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:3,
        autoplay:true,
        speed:1000,
        autoplaySpeed:800,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});

//Карта
ymaps.ready(init);

function init () {

var myMap = new ymaps.Map('map', {
center: [55.48,37.38],
zoom: 10
});

}

/* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#header__list-submenu a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });