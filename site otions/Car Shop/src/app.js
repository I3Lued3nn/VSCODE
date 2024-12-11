const hamburguer = document.querySelector(".Hamburguer");
const navMenu = document.querySelector(".navmenu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}));

document.querySelectorAll('.slider').forEach(slider => {
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const slideCount = slides.length;
    const prevButton = slider.querySelector('.prev');
    const nextButton = slider.querySelector('.next');
    const dots = Array.from(slider.querySelectorAll('.dot'));
    let currentIndex = 0;
    let intervalId;
  
    function goToSlide(index) {
        if (index < 0) index = slideCount - 1;
        if (index >= slideCount) index = 0;
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentIndex = index;
    }
  
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
  
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    
  
    function startAutoSlide() {
        intervalId = setInterval(nextSlide, 20000);
    }
  
    function stopAutoSlide() {
        clearInterval(intervalId);
    }
  
    prevButton.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
  
    nextButton.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
  
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            goToSlide(Number(dot.dataset.index));
            startAutoSlide();
        });
    });
  
    goToSlide(currentIndex); // 
    startAutoSlide();
  });
  
  