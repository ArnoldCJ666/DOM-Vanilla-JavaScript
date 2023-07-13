//Creating a body in HTML through javascript and accessing it in the DOM

//adding elements in html
const body = document.body

// creating a div element but not necessarily adding to html
const div = document.querySelector('div')


const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

// adding colors & css properties
spanHi.style.backgroundColor = "orangered"

// accessing elements using different methods
// Accessing elements using different methods
const elementById = document.getElementById('myElement');
const elementsByClass = document.getElementsByClassName('myClass');
const elementsByTag = document.getElementsByTagName('div');
const elementBySelector = document.querySelector('.myClass');


console.log(spanHi.dataset.longerName)

//adding attributes within span in html
spanHi.dataset.newName = "hi"

// accessing & adding classlists in html
spanHi.classList.add('new-class')
spanHi.classList.remove("hi1")

// adding a class
spanHi.classList.toggle("hi4", true)

// setting attributes within html
console.log(spanHi.setAttribute("id", "sdfsdfsd"))
// or
console.log(spanHi.id = "sdfsdfsdf")

// removing attributes like titles, ids.
spanHi.removeAttribute("id")

// accesssing the html attributes
console.log(spanHi.title)

console.log(spanHi.getAttribute("id"))
console.log(spanHi.getAttribute("title"))


// removing elements from html 
spanBye.remove()
// adding element back to page
div.append(spanBye)



// another method of removing elements
div.removeChild(spanHi)

// this allows you to add elements to the page
body.append("Hello World")


// Creating Elements within DOM
// const div = document.createElement("div")

// adding text in div after adding it to hmtl
div.innerText = "Hey there, friend"

// innerHTML renders html inside of a div or any element
// but it's not secure.
div.innerHTML = "<strong>Hey there, buddy</strong>" 


const strong = document.createElement("strong")
strong.innerHTML = "Hey there, buddy 3"
div.append(strong)

body.append(div) 

// selecting the div that's in the html skeleton page
const div = document.querySelector("div")

// textContent prints out all the spacing and indentation on the page
console.log(div.textContent)
// innerText prints out the content as is visible on the page
console.log(div.innerText)