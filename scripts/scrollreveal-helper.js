(function() {
    window.sr = ScrollReveal({
        reset: true
    });

    // Add class to <html> if ScrollReveal is supported
    if (sr.isSupported()) {
        document.documentElement.classList.add('sr');
    }


    window.sr = ScrollReveal().reveal('.fade-into-view', {
        duration: 1000,

        scale: 1,
        viewOffset: {
            top: -200,
            right: 0,
            bottom: 0,
            left: 0
        }
    });

})()