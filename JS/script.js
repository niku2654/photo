// Store all image elements and their ids
const images = [
    "image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8"
];

let currentImageIndex = null;

function openLightbox(imageId) {
    // Set the current image index
    currentImageIndex = images.indexOf(imageId);

    // Set the lightbox image source to the clicked image
    const lightboxImage = document.getElementById("lightboxImage");
    const imageSrc = document.getElementById(imageId).src;
    lightboxImage.src = imageSrc;

    // Show the lightbox
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    // Close the lightbox
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
    // Calculate the next image index
    currentImageIndex += direction;

    // Loop through the images if needed
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    // Change the lightbox image
    const lightboxImage = document.getElementById("lightboxImage");
    const newImageId = images[currentImageIndex];
    const newImageSrc = document.getElementById(newImageId).src;
    lightboxImage.src = newImageSrc;
}
