var toggled = false;
var circle = $("#circle");

$("#toggle").click(function () {

    $("h1").toggleClass("color-white");
    $("body").toggleClass("color-black");

    if (!toggled) {

        circle.css("margin-left", "80px");
        toggled = true;

    } else {

        circle.css("margin-left", "1px");
        toggled = false;

    }

});

// $("#para").html("hello");


// //modifying css with jQuery

// $('.para2').css({
//     'background':'red',
//     'font-size':'4rem'
// });

// //handling click using jquery
// $('.div1').css({
//     'height':'200px',
//     'width': '200px',
//     'background':'green'
// });

//increse width of a div on every click
// $('.toggler').on('click', function(event){
//     alert('div clicked');
//     var element= $(this);
//     var bodyedit=$('container');
//    element.css({
//     'margin-left':80+ '%'
//    })
// });

//button click handler
// $('button').click(function(){
//     alert('hello button clicked');
//     $("input:text").val("hello by jQuery");

// })





    



