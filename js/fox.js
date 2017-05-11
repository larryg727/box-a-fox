/**
 * Created by larryg on 5/8/17.
 */
"use strict";
$(document).ready(function () {
    "use strict";
    /*-------global variables----------*/
    var random;
    var idVar;
    var timeLeft = 30;//timer start value
    var score;
    var timing; // timer interval variable
    var speed;//default fox speed
    var gameSpeed;
    var continuePlay;

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
        $(idVar).children().attr("src", "img/fox2.png");
        $(idVar).parent().attr("clickable", "true");
        $(idVar).children().animate({
            bottom: "-40px"
        }, 1500).animate({
            bottom: "-140px"
        }, 1500);
        setTimeout(function(){
            $(".hide").attr("clickable", "false");
        }, 2600);
    }



    //keeps game going at interval
    function gameFlow(){
        if(continuePlay) {   //stops function recursion
        speed = 3000; // sets initial speed.
        if(score > 20){   // speed increases in foxes
            speed = 500;
        }else if(score >12){
            speed = 1000;
        }else if(score > 8){
            speed = 1500;
        }else if(score > 4){
            speed = 2000;
        }else if(score > 1){
            speed = 2400;
        }
        gameSpeed = setInterval(function(){
            randomGen();
            playGame();

    }, speed);

                setTimeout(function () {  // time out allows snimation to be played before evluation
                    clearInterval(gameSpeed); //allows speed change to take effect
                    gameFlow();
                }, speed);
            }
    }

    //timer function
    function timer() {
        if (timeLeft == 0){
            $("#remainingTime").text(timeLeft);
            gameOver();
        }else if (timeLeft > 0) {
            $("#remainingTime").text(timeLeft);
        }
        timeLeft--;
    }

    //start button to start game
    $("#start").click(function(){
        $("#title").fadeOut(1500);
        $("#start").fadeOut(1500, function(){
            $("#time").slideDown(1000);
        });
        score = 0;
        continuePlay = true;
        gameFlow();
        setTimeout(function(){
            timing = setInterval(timer, 1500);
        }, 2000)
    });

    //click functions
    $(".hide").click(function(){
        $(this).children().children().attr("src", "img/foxhit.png");
       var clickable = $(this).attr("clickable");
       console.log(clickable);
        if(clickable === "true") {
            score += 1;
            $("#score").text(score);
        }

    });


    //gameover function
    function gameOver(){
        continuePlay = false;
        clearInterval(timing);
        clearInterval(gameSpeed);
        $("#gameOver").show();
    }

});