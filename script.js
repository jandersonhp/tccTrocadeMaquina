document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[n].classList.add('active');

        indicators.forEach(indicator => indicator.classList.remove('active'));
        indicators[n].classList.add('active');

        document.querySelectorAll('.slide-number').forEach((el, index) => {
            el.textContent = `${index + 1}/${slides.length}`;
        });

        currentSlide = n;
    }

    nextBtn.addEventListener('click', () => {
        let nextSlide = currentSlide >= slides.length - 1 ? 0 : currentSlide + 1;
        showSlide(nextSlide);
    });

    prevBtn.addEventListener('click', () => {
        let prevSlide = currentSlide <= 0 ? slides.length - 1 : currentSlide - 1;
        showSlide(prevSlide);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            showSlide(index);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            let nextSlide = currentSlide >= slides.length - 1 ? 0 : currentSlide + 1;
            showSlide(nextSlide);
        } else if (e.key === 'ArrowLeft') {
            let prevSlide = currentSlide <= 0 ? slides.length - 1 : currentSlide - 1;
            showSlide(prevSlide);
        }
    });

    showSlide(0);

});
