document.addEventListener('mousemove', (e) => {
    const eyes = document.querySelectorAll('.eyes > div i');

    const { clientX, clientY } = e;
    const container = document.querySelector('.eyes').getBoundingClientRect();
    const centerX = container.left + container.width / 2;
    const centerY = container.right + container.height / 2;

    const angle = Math.atan2(clientY - centerY, clientX - centerX);
    const distance = Math.min(eyes[0].offsetWidth / 4, Math.hypot(clientX - centerX, clientY - centerY));

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    eyes.forEach(eye => {
        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    })
});