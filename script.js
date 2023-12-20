document.addEventListener('DOMContentLoaded', function () {
    var animatedElements = document.querySelectorAll('.animated-element');

    function checkVisibility() {
        var windowHeight = window.innerHeight;

        animatedElements.forEach(function (element) {
            var elementOffset = element.getBoundingClientRect().top;

            if (elementOffset < windowHeight * 0.75) {
                element.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});