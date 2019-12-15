$(".x").click(function(){
    $(this).parent().parent().parent().parent().parent().parent().hide();
})

$(".search-icon").hover(function(e){
    e.preventDefault();
  
     $(".form-control").slideToggle();
    
});
$(".dropdown").hover(function () {
    $(this).addClass("show");
    $(this).find(".dropdown-menu").addClass("show");
}, function () {
    $(this).removeClass("show");
    $(this).find(".dropdown-menu").removeClass("show");
});


/* var navbar= document.querySelector(".navigation");
var sticky = navbar.offSetTop;
function navbar(){
    if(window.pageYOffset>= sticky){
        navbar.classList.add("nav-fixed")
    }else{
        navbar.classList.remove("nav-fixed")
    }
} */
/* var $window = $(window),
    $nav = $(".navigaiton"),
    navTop = $nav.offset().fixed-top;

    $window.scroll(function(){
        $nav.toggleClass("nav-fixed", $window.scrollTop() > navTop)
    })
 */


$(window).scroll(function () {
    if ($("html").scrollTop() >150) {
        $(".navigation").addClass("is-sticky");
    } else {
        $(".navigation").removeClass("is-sticky");
    }
}); 
/*  $(".companies-slider").slick({
    dots:false,
    slidesToShow:1,
    slidesToScroll:6,
    touchMove:false

})  */
if ($("#mostpopular").length) {
    $(".#mostpopular").slick({
        infinite: true,
        prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.companies-slider').hover(function () {
        $(this).find(".slick-prev,.slick-next").css("opacity", "1");
    }, function () {
        $(this).find(".slick-prev,.slick-next").css("opacity", "");
    })
}