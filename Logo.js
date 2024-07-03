document.addEventListener('DOMContentLoaded', function () {
    const bubble = document.querySelector('.bubble');
    let position = 50;

    function updateReflectionPosition() {
        const translateY = parseFloat(getComputedStyle(bubble).getPropertyValue('transform').split(',')[5]);

        // Map the translateY value to a reflection position percentage
        // Assuming -20px translate corresponds to 30% and 0px corresponds to 70%
        position = 50 + (translateY / 20) * 20;
        if (position < 30) position = 30;
        if (position > 70) position = 70;

        bubble.style.setProperty('--_reflection-position', `${position}%`);

        requestAnimationFrame(updateReflectionPosition);
    }

    updateReflectionPosition();
});
