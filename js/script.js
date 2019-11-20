// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

// DOCUMENT READY FUNCTION BELOW

var user="";
var random = Math.random();
var choice="";
$("#shoot").click(function(){
    user=$("input").val();
    $("#userChoice").html(user);

    if(random < .33){
        choice ="scissors";

    }else if(random < .66){
        choice ="rock";

    }else{
        choice ="paper";
    }
    $("#computerChoice").html(choice);
});
