// eventListener Basics & Event Bubbling and Capture
// Stopping Event Propagation
// Run event only once

const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener("click", e => {
   console.log("Grandparent Capture")
}, { capture: true }) 

grandparent.addEventListener("click", e => {
   console.log("Grandparent Bubble")
})

parent.addEventListener("click", e => {
   e.stopPropagation()
   console.log("Parent Capture")
}, { capture: true })

parent.addEventListener("click", e => {
   console.log("Parent Bubble")
}, { once: true })

child.addEventListener("click", e => {
   console.log("Child Capture")
}, { capture: true })

parent.addEventListener("click", printHi)

setTimeout(() => {
   parent.removeEventListener("click", printHi)
}, 2000)


child.addEventListener("click", e => {
   console.log("Child Bubble")
})

document.addEventListener("click", e => {
   console.log("Document Capture")
}, { capture: true })

document.addEventListener("click", e => {
   console.log("Document Bubble")
})

function printHi() {
    console.log("Hi")    
}

const divs = document.querySelectorAll('div')

document.addEventListener('click', e => {
    if (e.target.matches("div")) {
    console.log("Hi")
    }
})

const newDiv = document.createElement('div')
newDiv.style.width = "200px"
newDiv.style.height = "200px"
newDiv.style.backgroundColor = "purple"
document.body.append(newDiv)