
console.log(link);

// function for creating an element : user define function 
function createMyElement(element){
   return document.createElement(element);
}

// fucntion definition with formal argument/ formal parameter ; user define functio
function setAttributeFromObject(element,obj){
    for (const key in obj) {
        element.setAttribute(key, obj[key]);
   }
   return element;
}

var link = createMyElement('link');

var myobj ={
    "rel":"stylesheet",
    "href":"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
}

var myscript = createMyElement('script');

var myscriptObject = {
    "src": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
}

console.log(myobj);
console.log(typeof myobj);

console.log(myscriptObject);

// how you can convert a java script object to an array
// {} -> []

// var myarr = Array.from(myobj);

// console.log(myarr);

// console.log(typeof myarr);

// function calling with actual argument or actual parameter
var link = setAttributeFromObject(link,myobj);
var myscript = setAttributeFromObject(myscript,myscriptObject);

// link.setAttribute('href','https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');
// link.setAttribute('rel','stylesheet');


// append the tag into the head: this is a user define function 
function appendToHead(element){
   document.head.append(element);
}

appendToHead(link);
appendToHead(myscript);

var h = createMyElement('header');

var headerTop = createMyElement('div');

var headerTopInner = createMyElement('div');
headerTopInner.setAttribute('class','container');
headerTop.append(headerTopInner);

var headerBottom = createMyElement('div');

var headerBottomInner = createMyElement('div');
headerBottomInner.setAttribute('class','container');
headerBottom.append(headerBottomInner);


headerTop = setAttributeFromObject(headerTop, {"class":"s_headerTop"});
headerBottom = setAttributeFromObject(headerBottom, {"class":"s_headerBottom"});



console.log(headerTop);

var h = setAttributeFromObject(h,{"class":"s_header"});
console.log(h);

h.appendChild(headerTop);
h.appendChild(headerBottom);

document.body.append(h);

//select DOM element 

// method1 : queryselector()
function select(selector){
    return document.querySelector(selector);
}

var styleObject = {
    "height": "169px",
    "border":"1px dashed black"
}



// select('.s_header').style.height = '169px';
select('.s_header').style.border = '1px dashed #000';

select('.s_headerTop').style.height = '58px';
select('.s_headerTop').style.backgroundColor = '#2874F0';
select('.s_headerTop').style.border= '1px dashed #2874F0';

select('.s_headerBottom').style.height = '111px'
select('.s_headerBottom').style.backgroundColor = '#fff';
select('.s_headerBottom').style.border= '1px solid #fff';

document.querySelector('.s_headerTop > div.container').style.border = '1px  dashed red';
document.querySelector('.s_headerTop > div.container').style.height = '100%';

document.querySelector('.s_headerBottom > div.container').style.border = '1px  dashed red';
document.querySelector('.s_headerBottom > div.container').style.height = '100%';


