let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const navDots = document.querySelectorAll('.nav-dot');

function showSlide(index) {
    currentSlideIndex = index;
    const offset = -index * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
    navDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

setInterval(nextSlide, 5000);

showSlide(currentSlideIndex);
