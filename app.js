var currentIndex = 0;
var img = document.getElementById("myImage");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var images = ['img/p1.jpg', 'img/p2.jpg', 'img/p3.jpg'];

prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    img.src = images[currentIndex];
});

nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
});
