const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};


var outputEl = document.getElementById("output-target")


/*
    You can get a reference to DOM elements and
    directly attach an event handler. In this
    example, we get every element with a class of
    "article-section" and listen for when the
    user clicks on the element. When that event
    fires, the attached "handleSectionClick"
    function gets executed.
 */
var articleEl = document.getElementsByClassName("article-section")

/*
    JavaScript, in the browser, automatically send the source
    event to the handler function for the event.
*/
function handleSectionClick (event) {
    console.log(event.target.innerHTML);
}

for (var i = 0; i < articleEl.length; i++) {
    articleEl[i].addEventListener("click", handleSectionClick)
}

/*
    Define functions that hold logic to be performed when mouse
    events are triggered by the browser.
*/

function handleHeaderMouseOver (event) {
    outputEl.innerHTML = "You moved your mouse over me"
}

function handleHeaderMouseOut(event) {
    outputEl.innerHTML = "Why u leave me?"
}

const header = document.getElementById("page-header");
// const header = document.querySelector("page-header");

/*
    Get a reference to the DOM element with an id of
    "page-header", and attach an event handler for the
    mouseover, and mouseout, events.
 */
// header.addEventListener("mouseover", handleHeaderMouseOver)
// header.addEventListener("mouseout", handleHeaderMouseOut)



/*
    We can also write an anonymous function (lamba expression)
    in the addEventListener declaration instead of using a
    function reference.
 */
var fieldEl = document.getElementById("keypress-input")

// fieldEl.addEventListener("keyup", function (event) {
//     outputEl.innerHTML = event.target.value
// })


/*
  Now we can start making a truly interactive experience
  combining HTML, JavaScript and CSS. When a user clicks
  on a button in the DOM, we can listen for that event in
  JavaScript, and then add, or remove, CSS classes.

  In this example, I simply use the `toggle()` method on
  the `classList` property of a DOM element to automatically
  add and remove a class.
 */
var guineaPig = document.getElementById("guinea-pig")

function toggleClass (newClass) {
  guineaPig.classList.toggle(newClass)
  console.log("guineaPig.classList", guineaPig.classList)
}

document.getElementById("add-color").addEventListener("click", function() {
    printList();
})

document.getElementById("add-color").addEventListener("click", function() {
    toggleClass("blue")
})


document.getElementById("make-large").addEventListener("click", function() {
    toggleClass("large")
})

document.getElementById("add-border").addEventListener("click", function() {
    toggleClass("bordered")
})

document.getElementById("add-rounding").addEventListener("click", function() {
    toggleClass("rounded")
})


/*
  EVENT BUBBLING:

  You can add an event handler on the body tag, and since all
  browser events bubble up to the body, you can then put in
  conditional logic to handle the click event on many different
  elements in one function.
 */
// document.querySelector("body").addEventListener("click", function(event) {
//     console.log("You clicked on the body of the DOM")
// })

/////////////////////////////////////////////////////


// let activate_on = () => {
//     let article1 = document.getElementById("powerList")
// };

///////////////////////////////////////////////////////////
// let activate_on = () => {
//     let ids = document.querySelectorAll('section'), i;
//     for (i = 0; i < ids.length; ++i) {
//     ids[i].setAttribute("class","power enabled")
//     }
// };
// let activate_off = () => {
//     var ids = document.querySelectorAll('section'), i;
//     for (i = 0; i < ids.length; ++i) {
//     ids[i].setAttribute("class","power disabled")
//     }
// };
// document.querySelector("#activate-all").addEventListener("click", function(){
//     activate_on()});
// document.querySelector("#deactivate-all").addEventListener("click", function(){
//     activate_off()});

    // document.querySelector("#activate-all").addEventListener("click", function(){
// powers_on()});

    // THIS WORKS BELOW BUT IT DOESN'T DO THE ITERATION OVER THE DOM ELEMENTS

    // let section_flight = document.getElementById("flight");
    // let section_mind = document.getElementById("mindreading");
    // let section_x_ray = document.getElementById("xray");
    
// let powers_on = () => {
//         section_flight.setAttribute("class","power enable"); 
//         section_mind.setAttribute("class","power enable");
//         section_x_ray.setAttribute("class","power enable");
// };

// let powers_off = () => {
//         section_flight.setAttribute("class","power disable"); 
//         section_mind.setAttribute("class","power disable"); 
//         section_x_ray.setAttribute("class","power disable"); 
// };