const img = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg"];
const randomImg = img[Math.floor(Math.random() * img.length)];

const bgImg = document.createElement("style");
bgImg.innerText = `body {
    background-image:url(img/${randomImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;}`;

document.head.appendChild(bgImg);