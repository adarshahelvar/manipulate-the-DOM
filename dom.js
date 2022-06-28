var newDiv=document.createElement('div');
newDiv.className='hello';
// Add id
newDiv.id='hellol';
// Add attr
newDiv.setAttribute('title','Hello Div');
// Create text node
var newDivText=document.createTextNode('Hello World');
// Add text to div
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);







