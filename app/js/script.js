const header = document.getElementById('header')
const hamburger = document.getElementById('hamburger')
const overlay = document.getElementById('overlay')
const body = document.getElementById('body')

const fadeElems = document.querySelectorAll('.has-fade')


hamburger.addEventListener('click', function(){
    console.log('open hamburger')

    if(header.classList.contains('open')){
        header.classList.remove('open')
        body.classList.remove('no-scroll')
        fadeElems.forEach(elem => {
            elem.classList.remove('fade-in')
            elem.classList.add('fade-out')
        });
    }
    else{
        header.classList.add('open')
        body.classList.add('no-scroll')
        fadeElems.forEach(elem => {
            elem.classList.remove('fade-out')
            elem.classList.add('fade-in')
        });
        
    }
    
})