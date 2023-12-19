document.addEventListener('DOMContentLoaded', function () {
    var topElement = document.querySelector('.top');
        topElement.classList.add('show');
    var section2 = document.querySelector('.section_2');

    function checkVisibility() {
        var windowHeight = window.innerHeight;
        var section2Offset = section2.getBoundingClientRect().top;

        if (section2Offset < windowHeight * 0.75) {
            section2.classList.add('show');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});