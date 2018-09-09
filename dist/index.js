'use strict';

// === === === EXECUTING A FUNCTION WITH A FUNCTION

// function say (something) {  
//     console.log(something);
// }

// function exec (func,arg) {  
//     func(arg);
// }

// exec(say, "ello amigo");


// === === ANONYMOS FUNCTION
// === === A FUNCTION IS USING THE ARROW FUNCTION AND THEN THE exec FUNCTION IS GIVEN A STRING THAT IT RUNS


// function exec (func,arg) { 
//     func(arg);
// }
// exec((something) => {  
//     console.log(something);
//     },"XELO KOMRAD");


// window.setTimeout((something) => {  
//     console.log(something);
//     },5000,"XELO KOMRAD");


var listInp = document.querySelector('.listInp');
var listBtn = document.querySelector('.listBtn');
var listBtnRm = document.querySelector('.listBtnRm');
var removeBtn = document.querySelector('.removeBtn');

//=== === === add an elemnt to a parent element
listBtn.addEventListener('click', function () {
    var ol = document.getElementsByTagName('ol')[0];
    var listItem = document.createElement('li');
    var removeBtn = document.createElement('button');
    //list items
    listItem.textContent = listInp.value;
    listItem.className = "listItem";
    listItem.style.color = listInp.value;
    //button for list item remove 
    removeBtn.textContent = "remove";
    removeBtn.className = "removeBtn";
    //adding the element
    ol.appendChild(listItem);
    listItem.appendChild(removeBtn);
    listInp.value = "";

    removeBtn.addEventListener('click', function (event) {
        ol.removeChild(event.target.parentNode);
    });
});

//=== === === removal of the element
listBtnRm.addEventListener('click', function () {
    var ol = document.getElementsByTagName('ol')[0];
    var listItem = document.querySelector('li:last-child');
    ol.removeChild(listItem);
});