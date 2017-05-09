/**
 * Created by larryg on 5/8/17.
 */
"use strict";
$(document).ready(function () {
    "use strict";
    /*-------global variables----------*/
    var random;
    var idVar


    /*-------functions-----------*/

    // initial game load animation
    $(".fox").animate({
        bottom: "-40px"
    }, 1000).animate({
        bottom: "-140px"
    }, 1500);

    // generates new random number
    function randomGen (){
        random = Math.floor((Math.random()* 12)+ 1);
    }

    // function to animate random fox
    function playGame(){
        idVar = "#h-" + random;
        $(idVar).children().animate({
            bottom: "-40px"
        }, 1500).animate({
            bottom: "-140px"
        }, 1500, function(){
            $(idVar).children().attr("src", "img/fox2.png");
        });
    }

    //keeps game going at interval
    function gameFlow(){
        setInterval(function(){
            randomGen();
            playGame()
        }, 3000)
    }

    //start button to start game
    $("#start").click(function(){
    setTimeout(function(){
        gameFlow()
    }, 1000);
    });

    //click functions
    $(".hide").click(function(){
        $(this).children().children().attr("src", "img/foxhit.png");
    })

});