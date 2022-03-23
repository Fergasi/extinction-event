// creating variable from tags and elements (within those tags) using querySelectorAll
const listItems_of_olTag = document.querySelectorAll('ol li');
const listItems_of_ulTag = document.querySelectorAll('ul li');
const imgTags = document.querySelectorAll('img');

// creating variable from button based on ID.
const button = document.querySelector('#destroy-all');

// strikethrough function, using event as input and altering event.target (item event was conducted on) to have line-through.
function strikeThrough(event) {
    //event.target.style.textDecoration = 'line-through';
    style_lineThrough_helper(event.target);
}

// loop through ordered list applying event listener to all list items.
for (let item of listItems_of_olTag) {
    item.addEventListener('click', strikeThrough);
}

// Disappear function, using event as input and altering event.target (item event was conducted on)reducing opacity to 0.
function disappear(event) {
    //event.target.style.opacity = 0;
    style_opacity_helper(event.target);
}

// loop through unordered list applying event listener to all list items.
for (let item of listItems_of_ulTag) {
    item.addEventListener('click', disappear);
}

// imgDisappear function, using event as input and altering event.target (item event was conducted on) to reduce width of image to 0.
function imgDisappear(event) {
    //event.target.style.width = '0px';
    style_width_helper(event.target);
}

// loop through img tags applying event listener to all items.
for (let img of imgTags) {
    img.addEventListener('click', imgDisappear);
}

function destroyAll() {
    
    for (let item of listItems_of_olTag) {
        //item.style.textDecoration = 'line-through';
        style_lineThrough_helper(item);
    }

    for (let item of listItems_of_ulTag) {
        // item.style.opacity = 0;
        style_opacity_helper(item);
    }

    for (let img of imgTags) {
        //img.style.width = '0px';
        style_width_helper(img);
    }
}

// event listener for the 'meteor me' button
button.addEventListener('click', destroyAll);

//** 
// Helper functions for CSS style changes
function style_opacity_helper(x){
    x.style.opacity = 0;
}

function style_width_helper(x){
    x.style.width = '0px';
}

function style_lineThrough_helper(x){
    x.style.textDecoration = 'line-through';
}