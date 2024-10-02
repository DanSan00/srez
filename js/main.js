'use stict';

//выпадающее меню
let menuElems = document.querySelectorAll('.menu_el')

menuElems.forEach(menuElem=>{
    let s_menu = menuElem.querySelector('.s_menu');
    let btn = menuElem.querySelector('.btn_menu');

    menuElem.addEventListener('mouseenter',function(){
        s_menu.classList.add('active');
        btn.classList.add('active');
    })
    menuElem.addEventListener('mouseleave',function(){
        s_menu.classList.remove('active');
        btn.classList.remove('active');
    })
})

//слайдер
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.childElementCount;
  
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
  
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

showSlide(currentIndex);

//выпадающаяя гармошка

document.querySelector('.FAQ').addEventListener('click', function(event){
    let target = event.target.closest('.f_item');
    if(!target) return;

    target.classList.toggle('active');
    let p = target.querySelector('p');

    if(target.classList.contains('active')){
        p.style.height = p.scrollHeight + 'px';
    }else{
        p.style.height = '';
    }
})

// модальное окно
const mod = document.getElementById("phoneModal");
const span = document.getElementsByClassName("zakr")[0];

function showModal() {
    mod.style.display = "block";
}
span.onclick = function() {
    mod.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === mod) {
        mod.style.display = "none";
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            showModal();
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 
});

const target = document.getElementById('zagol');
observer.observe(target);
