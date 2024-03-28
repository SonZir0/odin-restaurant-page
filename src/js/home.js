import './../css/home.css';
import img1 from './../img/Nilagang.png'
import img2 from './../img/MapoTofu.png'
import img3 from './../img/PorkAsado.png'
import img4 from './../img/TomatoSalad.png'

export default createHomeDiv;

function createImgNodes() {
    const images = [];
    for (let i = 0; i < 4; i++) {
        images.push(new Image());
        images[i].classList.add(`img${i + 1}`);
    }
    // this can be done dynamicly through requireContext.keys.map()
    images[0].src = img1;
    images[1].src = img2;
    images[2].src = img3;
    images[3].src = img4;
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