imageFiles = ["MeAndMyBoys.jpg", "MeAndMyWife.jpg", "PunchyMe.jpg", "MattBurr.jpg"];

$(document).ready(function() {
  startCarousel();
});


function startCarousel() {
  var nextImage = 0;
  setInterval(function() {
    showNextImage(nextImage);
    nextImage = (nextImage + 1) % imageFiles.length;
  }, 3000);
}

function showNextImage(nextImage) {
  $("#myPicture").attr("src") = imageFiles[nextImage];
}
