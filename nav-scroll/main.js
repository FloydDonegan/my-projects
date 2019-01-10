$(function(){

// nav link click event
$(".link").on("click", function(e){
    e.preventDefault();
    // store nav link href attributes in a variable called section
    let section = $(this).attr("href");
    console.log(section);

    //select html and body tags to animate
    $("html, body").animate({
        //smooth scroll functionality
        scrollTop: $(section).offset().top
    }, "slow")
})
})