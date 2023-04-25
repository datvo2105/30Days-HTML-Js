const images = document.querySelectorAll(".image img");
const gallery = document.querySelector(".gallery");
const btnClose = document.querySelector(".btnClose");
const btnPrev = document.querySelector(".gallery__action--prev");
const btnNext = document.querySelector(".gallery__action--next");

let galleryImg = document.querySelector(".gallery__inner img");
let currentIndex = 0;

const showGallery = () => {
  if (currentIndex <= 0) {
    btnPrev.classList.add("hide");
  } else {
    btnPrev.classList.remove("hide");
  }

  if (currentIndex >= images.length - 1) {
    btnNext.classList.add("hide");
  } else {
    btnNext.classList.remove("hide");
  }

  galleryImg.src = images[currentIndex].src;
  gallery.classList.add("show");
};

images.forEach((image, index) => {
  image.addEventListener("click", () => {
    currentIndex = index;
    showGallery();
  });
});

btnClose.addEventListener("click", () => {
  gallery.classList.remove("show");
});

btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
});

btnNext.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
  }
});
