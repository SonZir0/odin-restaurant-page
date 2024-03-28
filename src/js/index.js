import 'normalize.css';
import './../css/style.css';
import './../css/home.css'; // move to relevant .js file later

import img1 from './../img/Nilagang.png'
import img2 from './../img/MapoTofu.png'
import img3 from './../img/PorkAsado.png'
import img4 from './../img/TomatoSalad.png'

const contentDiv = document.querySelector('#content');
const newElement = document.createElement('div');
newElement.classList.add("home");

const h1 = document.createElement('h1');
h1.textContent = "The best place\nto enjoy your food";
newElement.appendChild(h1);

const p = document.createElement('p');
p.textContent = "Indulge in the perfection of expertly cooked cuisine, crafted from time-honored recipes under the guidance of our seasoned chefs.";
newElement.appendChild(p);

const imagesDiv = document.createElement('div');
imagesDiv.classList.add("images");

const image1 = new Image();
image1.classList.add("img1");
image1.src = img1;

const image2 = new Image();
image2.classList.add("img2");
image2.src = img2;

const image3 = new Image();
image3.classList.add("img3");
image3.src = img3;

const image4 = new Image();
image4.classList.add("img4");
image4.src = img4;

imagesDiv.append(image1, image2, image3, image4);
newElement.appendChild(imagesDiv);

contentDiv.appendChild(newElement);