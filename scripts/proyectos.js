const left = document.querySelector('.left');
const right = document.querySelector('.right');
const card = document.querySelectorAll('.card');
const carrusel = document.querySelector('.carrusel');

let currentIndex = 0;

left.addEventListener('click', ()=>{
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = card.length - 1;
    }
    moverCarrusel()
})
right.addEventListener('click',()=>{
    currentIndex++;
    if(currentIndex >= card.length){
        currentIndex = 0;
    }
    moverCarrusel();
})

const moverCarrusel = ()=>{
    carrusel.style.transform = `translateX(-${currentIndex*100}%)`;
}