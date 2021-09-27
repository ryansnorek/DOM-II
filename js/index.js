// Your code goes here
// mouseover
// keydown
// wheel
// load
// focus
// resize
// scroll
// select
// dblclick
// drag / drop

const intro = document.querySelector('.intro')
intro.addEventListener('scroll', function() {
    this.style.background = 'yellow'
})

const title = document.querySelector('.logo-heading')
const navBarLinks = Array.from(document.querySelectorAll('.nav-link'))
navBarLinks.forEach(link => {

    link.addEventListener('mouseover', function() {
        this.style.color = 'red'
        this.style.fontWeight = 'bold'
        this.style.fontSize = '3rem'
        this.style.border = '2px dashed red'
    })
    link.addEventListener('mouseout', function() {
        this.style.color = 'black'
        this.style.fontWeight = 'normal'
        this.style.fontSize = '1rem'
    })
})


// Delete all elements on hover
const content = ['p', 'img', '.btn', 'h1', 'h2', 'h4']

loopDelete(content)

function loopDelete(array) {
    array.forEach(element => {
        document.querySelectorAll(element).forEach(e => {
            e.addEventListener('mouseover', () => e.style.display = 'none')
        })
    })
}

// Nav Bar Growing
let f = 1
function func() {
    f++
    navBarLinks.forEach(el => {
        el.style.fontSize = `${f}rem`
    })
}
setInterval(func, 1000)


