const fixedImage = document.querySelector('.fixedBlock');
const staticBlock = document.querySelector('#staticBlock');
const topBtn = document.querySelector('#top');
const downBtn = document.querySelector('#down');
const images = document.querySelectorAll('.scaleImage img');

const showImage = elem => {
    if (elem.getBoundingClientRect().top < window.innerHeight) elem.setAttribute('src', elem.getAttribute('data-realsrc'));
};

topBtn.addEventListener('click', () => {
    let y = window.pageYOffset;
    window.scrollTo(0, 0);
    topBtn.style.display = 'none';
    downBtn.style.display = 'block';
    downBtn.addEventListener('click', () => {
        window.scrollTo(0, y);
        topBtn.style.display = 'block';
        downBtn.style.display = 'none';
    });
});

const fixateImage = (image, staticBlock) => {
    if (staticBlock.getBoundingClientRect().bottom < 0) {
        image.style.position = 'fixed';
        image.style.left = '20px';
        image.style.top = '20px';
    } else image.style.position = 'static';
};

images.forEach(showImage);
window.addEventListener('scroll', () => {
    if (window.pageYOffset > window.innerHeight) {
        topBtn.style.display = 'block';
        downBtn.style.display = 'none';
    }
    fixateImage(fixedImage, staticBlock);
    images.forEach(showImage)
});