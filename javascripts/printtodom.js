"use strict";

let $outputField = $("#msgOutput");
let count = 0;
let userMsgs=[];

module.exports.createMsgDiv = (message,source) => {
    count += 1;
    addToArray(message);
    let msgContainer = $(document.createElement('div'));
        if (source === "user") {
            msgContainer.addClass("userMsg");
        }
        else {
            msgContainer.addClass("APIMsg");
        }
    msgContainer.append(`<p>${message}</p>`);
    addDeleteButton(msgContainer, message);
};

let addDeleteButton = (currentMsg, message) => {
    let deleteBtn = $(document.createElement('button'));
    deleteBtn.append("Delete").addClass("delete");
    currentMsg.append(deleteBtn);
    printToDom(currentMsg, deleteBtn, message);
};



let printToDom = (msgDiv, deleteBtn, message) => {
    $outputField.append(msgDiv);
    deleteBtn.click( function() {
        console.log("ready to delete", msgDiv);
        removeFromArray(message);
        // console.log(this);
        console.log($outputField);
        msgDiv.remove();
    });
};

//Put add and remove to seperate functions
let addToArray = (msg)=> {
    userMsgs.push(msg);
    // console.log("ADDED", userMsgs);
};

let removeFromArray = (userMessage) => {
    console.log("");
    // let targetMsg = event.parentElement.childNodes[0].innerHTML;
    // let indexVal = userMsgs.indexOf(targetMsg);
    // if (indexVal > -1) {
    //     userMsgs.splice(indexVal, 1);
    // console.log("REMOVED", userMsgs);
};