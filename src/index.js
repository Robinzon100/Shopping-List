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
    






const listInp = document.querySelector('.listInp');
const listBtn = document.querySelector('.listBtn');
const listBtnRm = document.querySelector('.listBtnRm');
const removeBtn = document.querySelector('.removeBtn');

//=== === === add an elemnt to a parent element
listBtn.addEventListener('click', () => {
    let ol = document.getElementsByTagName('ol')[0]; 
    let listItem = document.createElement('li');
    let removeBtn = document.createElement('button');
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
    
    
    removeBtn.addEventListener('click', (event) => {
        ol.removeChild(event.target.parentNode);
    });
});

//=== === === removal of the element
listBtnRm.addEventListener('click', () => {
    let ol = document.getElementsByTagName('ol')[0]; 
    let listItem = document.querySelector('li:last-child');
    ol.removeChild(listItem);
});

                                                        


    