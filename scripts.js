document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('volunteer-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            if (!name || !email) {
                alert('Please fill out all required fields.');
                event.preventDefault();
            }
        });
    }

    const images = document.querySelectorAll('#featured-projects img');
    if (images.length > 0) {
        let currentIndex = 0;
        const totalImages = images.length;

        function showImage(index) {
            images.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % totalImages;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            showImage(currentIndex);
        }

        showImage(currentIndex);

        setInterval(nextImage, 3000);

        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('prev-btn');
        if (nextBtn) nextBtn.addEventListener('click', nextImage);
        if (prevBtn) prevBtn.addEventListener('click', prevImage);
    }

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    const projectSections = document.querySelectorAll('.project-details');
    projectSections.forEach(section => {
        section.addEventListener('click', function() {
            const content = this.querySelector('.details-content');
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
        });
    });
});