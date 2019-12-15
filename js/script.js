$(".x").click(function(){
    $(this).parent().parent().parent().parent().parent().parent().hide();
})

$(".search-icon").click(function(e){
    e.preventDefault();
  
     $(".form-control").slideToggle();
    
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