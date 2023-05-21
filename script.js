function toggleAnimation(animationClass, targetElements) {
    targetElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < (window.innerHeight - 100) && elementBottom >= 0) {
            element.classList.remove(animationClass);
            element.classList.add('reset');
        }
        else if (element.classList.contains('reset')) {
            element.classList.remove('reset');
        }
        else {
            element.classList.add(animationClass);
            element.classList.remove('reset');
        }
    });
}

const animateUpElements = document.querySelectorAll('.animate-up');
const animateLeftElements = document.querySelectorAll('.animate-left');
const animateRightElements = document.querySelectorAll('.animate-right');

// Call toggleAnimation() once immediately after page load
toggleAnimation('animate-up', animateUpElements);
toggleAnimation('animate-left', animateLeftElements);
toggleAnimation('animate-right', animateRightElements);

window.addEventListener('scroll', () => {
    toggleAnimation('animate-up', animateUpElements);
    toggleAnimation('animate-left', animateLeftElements);
    toggleAnimation('animate-right', animateRightElements);
});
function rotateSlides() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    let nextSlide;

    setInterval(() => {
        do {
            nextSlide = Math.floor(Math.random() * slides.length);
        } while (nextSlide === currentSlide);

        basic
        Copy
        for (let i = 0; i < slides.length; i++) {
            if (i !== nextSlide) {
                slides[i].classList.remove('active');
            }
        }

        if (currentSlide !== nextSlide) {
            slides[nextSlide].classList.add('active');
            currentSlide = nextSlide;
        }
    }, 5000);
}
rotateSlides()
// Get the icon and the ul element
const icon = document.querySelector('.bars');
const menu = document.querySelector('.menu ul');

// Add an event listener to the icon
icon.addEventListener('click', () => {
    // Toggle the 'active' class on the ul element
    menu.classList.toggle('active');
});