document.addEventListener('DOMContentLoaded', function() {
    var images = ["../images/index_images/bg1.jpg", "../images/index_images/bg2.jpg"];
    var currentIndex = 0;
    var bodyElement = document.getElementById('restaurantBody');

    function changeBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        bodyElement.style.backgroundImage = "url('" + images[currentIndex] + "')";
    }

    // Initial call
    changeBackground();

    setInterval(changeBackground, 3000); // Change background every 3 seconds
});
