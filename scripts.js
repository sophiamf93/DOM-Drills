document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.className = 'header-container';
    document.body.appendChild(div);

    let header1 = document.createElement('h1');
    let header1Text = document.createTextNode("This is an h1");
    header1.appendChild(header1Text);
    header1.className = 'h1';
    div.appendChild(header1);

    let header2 = document.createElement('h2');
    let header2Text = document.createTextNode("This is an h2");
    header2.appendChild(header2Text);
    header2.className = 'h2';
    div.appendChild(header2);

    let header3 = document.createElement('h3');
let header3Text = document.createTextNode("This is an h3");
header3.appendChild(header3Text);
header3.className = 'h3';
div.appendChild(header3);

let header4 = document.createElement('h4');
let header4Text = document.createTextNode("This is an h4");
header4.appendChild(header4Text);
header4.className = 'h4';
div.appendChild(header4);

let header5 = document.createElement('h5');
let header5Text = document.createTextNode("This is an h5");
header5.appendChild(header5Text);
header5.className = 'h5';
div.appendChild(header5);

let header6 = document.createElement('h6');
let header6Text = document.createTextNode("This is an h6");
header6.appendChild(header6Text);
header6.className = 'h6';
div.appendChild(header6);

let colorArray= ['Blue', 'Green', 'Purple', 'Red', 'Yellow', 'Orange', 'Pink', 'Black']

function randomColor() {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
 }

 header1.addEventListener("dblclick", function() {
    header1.style.color = randomColor()
 }); 

 console.log(randomColor())

  
 function addItem(){
    let ul = document.getElementById("list");
    let listItem = document.getElementById("list item");
    let li = document.createElement("li");
    li.setAttribute('id',listItem.value);
    li.appendChild(document.createTextNode(listItem.value));
    ul.appendChild(li);

 for (let i = 0; i < listItem.length; i++) {
    console.log(friends[i].name);

    for (let li = 8; li > 0; li--) {
        j = li - 1;
        
        console.log("This is list item " + );
    }

}

 
 
 
 
 
 
 
 
 
//  function addItem(){
//     let ul = document.getElementById("list");
//     let listItem = document.getElementById("list item");
//     let li = document.createElement("li");
//     li.setAttribute('id',candidate.value);
//     li.appendChild(document.createTextNode(candidate.value));
//     ul.appendChild(li);

// console.log(addItem())







    console.log('DOM fully loaded and parsed');





})