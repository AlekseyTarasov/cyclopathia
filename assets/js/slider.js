document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.banner-carousel');
    if (!carousel) return;
    
    const slides = carousel.querySelectorAll('.banner-slide');
    const dots = carousel.querySelectorAll('.banner-dot');
    const prevBtn = carousel.querySelector('.banner-prev');
    const nextBtn = carousel.querySelector('.banner-next');
    
    let currentSlide = 0;
    let autoplayInterval;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showSlide(currentSlide);
    }
    
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 7000);
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    // Navigation buttons
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            prevSlide();
            stopAutoplay();
            startAutoplay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            nextSlide();
            stopAutoplay();
            startAutoplay();
        });
    }
    
    // Dots navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
            stopAutoplay();
            startAutoplay();
        });
    });
    
    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    // Initialize
    showSlide(currentSlide);
    startAutoplay();
});
