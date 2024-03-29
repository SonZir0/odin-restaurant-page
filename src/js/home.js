import './../css/home.css';
import importImages from './index.js'

export default createHomeDiv;

function createImgNodes() {
    const images = [];
    const imgSrcs = importImages(require.context('./../img', false, /\.(png|jpe?g|svg)$/));

    for (let i = 0; i < 4; i++) {
        images.push(new Image());
        images[i].classList.add(`img${i + 1}`);
        images[i].src = imgSrcs[i];
    }
    return images;
}

function createHomeDiv(contentDivNode) {
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

    const imgArr = createImgNodes();
    for (let i = 0; i < 4; i++) {
        imagesDiv.appendChild(imgArr[i]);
    }
    newElement.appendChild(imagesDiv);
    contentDivNode.appendChild(newElement);
}