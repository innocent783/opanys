const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const slide = document.querySelector(".carousel-slide");
const images = document.querySelectorAll(".carousel-slide img");
const totalImages = images.length;

let Index = 0;

function showSlides() {
  const offset = -Index * 100;
  slide.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  Index = (Index === 0) ? totalImages - 1 : Index - 1;
  showSlides();
});

nextButton.addEventListener('click', () => {
  Index = (Index === totalImages - 1) ? 0 : Index + 1;
  showSlides();
});

setInterval(() => {
  nextButton.click();
}, 7000);

const containerEl = document.querySelector('#container');
const careers = ['Youtuber', 'Digital Marketer', 'UI/UX designer'];
let careerIndex = 0;
let characterIndex = 0;

function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1>${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
}

setInterval(updateText, 400);