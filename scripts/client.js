/* jshint esversion: 6*/

$(document).ready(readyNow);

function readyNow(){
    $('#generateBtn').on('click', appendDiv);

    $(document).on('click','.swapBtn', changeStyle);

    $(document).on('click', '.deleteBtn', removeParent);
}

//variable to hold counter
let counter = 0;

//array to hold div Id's
let divIdArr = [];

//function to create div and append do DOM
function appendDiv(){
    console.log('in appendDiv');

    //reset counter if array is empty
    if(divIdArr.length == 0){
        counter = 1;
    }

    //generate id for div 
    let divID = 'apDiv' + counter

    //create div to append
    let divToAppend = $('<div id="' + divID + '" class="appendedDiv red" ></div>');

    divIdArr.push(divID);
    
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

    //increment counter
    counter++;
}

//function to toggle css styles
function changeStyle(){
    console.log('in changeStyle');

    //toggle red/yellow color classes 
    $(this).parent().toggleClass('red').toggleClass('yellow');
}

//function to remove generated div
function removeParent(){

    //reset generate click counter if all divs deleted
    //get div id
    let divId = $(this).parent().attr('id');
    
   //loop through array of id's
   for( let divName of divIdArr ){
       console.log('match');
        if(divId == divName){
            let indexOfDiv = divIdArr.indexOf(divId);
            divIdArr.splice(indexOfDiv, 1);
        }
   }

   //reset counter
    if (divIdArr.length == 0) {
        counter = 0;
    }

    console.log(divId);

    //remove from DOM
    $(this).parent().remove();

}
