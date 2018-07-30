/* jshint esversion: 6*/

$(document).ready(readyNow);

function readyNow(){
    $('#generateBtn').on('click', appendDiv);

    $(document).on('click','.swapBtn',changeStyle);
}

//variable to hold counter
let counter = 0;

function appendDiv(){
    console.log('in appendDiv');


    //increment counter
    counter++;

    //create div to append
    let divToAppend = $('<div class="appendedDiv red" ></div>');
    //create p to append to div
    let pToAppend = $('<p></p>');

    //append counter to p
    $(pToAppend).html(counter);

    //append p to div
    divToAppend.append(pToAppend);

    //create buttons to append to div
    let swapBtn = $('<button id="swapBtn'+ counter + '" class="swapBtn" >Swap</button>');
    let deleteBtn = $('<button id="deleteBtn' + counter + '" class="deleteBtn" ></button');

    //append string delete to deletBtn html
    $(deleteBtn).html('Delete');

    //append buttons to div
    divToAppend.append(swapBtn);
    divToAppend.append(deleteBtn);

    $('#appendContainer').append(divToAppend);

}


function changeStyle(){
    console.log('in changeStyle');

    //toggle red/yellow color classes 
    $(this).parent().toggleClass('red').toggleClass('yellow');


}