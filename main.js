document.addEventListener('DOMContentLoaded', init);
let myInterval = null;

function init() {
    const back_btn = document.querySelector('.back-btn');
    const next_btn = document.querySelector('.next-btn');
    const frame = document.querySelector('.frame');
    const slides = document.querySelectorAll('.slide');
    const controls = document.querySelector('.controls');
    const caption = document.querySelector('.figcaption');

    slides.forEach((currentNode) => {
        currentNode.classList.add('hide', 'pos-abs');
    });

    slides[0].classList.remove('hide');

    controls.classList.remove('hide');

    next_btn.addEventListener('click', changeSlide);
    back_btn.addEventListener('click', changeSlide);

    caption.classList.add('caption');

    myInterval = setInterval(changeSlide, 5000);
}

function changeSlide(e) {
    if (e) {
        e.preventDefault();
        clearInterval(myInterval);
    }

    const frame = document.querySelector('.frame');
    const showing = frame.querySelector('.current');
    const slides = frame.querySelectorAll('.slide');
    const caption = document.querySelector('.figcaption');

    let nextUp = showing.nextElementSibling;

    if (!e || e.target.classList.contains('back-btn')) {
        nextUp = showing.previousElementSibling || slides[slides.length - 1];
      } else {
        nextUp = showing.nextElementSibling || slides[0];
      }

    showing.classList.toggle('hide');
    showing.classList.toggle('current');

    nextUp.classList.toggle('hide');
    nextUp.classList.toggle('current');

    caption.textContent = nextUp.getAttribute('hello');
}
