"use strict";
let printToDom = require('./interactiveWeather');


let $msgInput = $("#msgInput");
$("#msgInput").keypress( (event) => {
    if (event.keyCode === 13) {
        let userMsg = $msgInput.val();
        printToDom.getUserWeather(userMsg);
        $msgInput.val('');
    }
    $("#msgOutput").scrollTop($("#msgOutput").height()+100000);
});


$("#themes").change( function () {
    $("#mainWrapper").removeClass().addClass(`theme-${this.value}`);
    $("body").removeClass().addClass(`theme-${this.value}`);
});

$("#clearMsgs").click( () => {
    $("#msgOutput").empty();
    $msgInput.val(' ');
});

$("#large").change(function() {
    $("#textSize").removeClass().addClass(`size-${this.value}`);
});