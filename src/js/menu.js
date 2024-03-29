import './../css/menu.css';
import importImages from './index.js'

export default createMenuDiv;

const recipeNamesArr = ["Mapo tofu", "Pork asado de carajay", "Nilagang baka", "Summer Tomato Salad",
                    "Funfetti Pancakes", "Million Dollar Pie"];
const recipeDescrArr =  ["Mapo tofu is a traditional Sichuan dish that blends the unique, numbing flavor of Sichuan peppercorns with silken tofu and savory ground pork.",
                            "Pork asado de carajay is an all-in-one meal, with chunks of pork simmered in a tomato sauce-based broth with potatoes, carrots, chickpeas, bell peppers, and cabbage.",
                            "Nilagang baka, or beef nilaga, is a Filipino stew of tender beef cubes simmered in a clear broth with potatoes, carrots, and leafy greens.",
                            "We start with juicy ripe tomatoes at the peak of summer, add a simple vinaigrette and a few herbs and voilà! A recipe you can't get enough of until the last tomato of the season is gone!",
                            "These pancakes channel funfetti cake by using rainbow sprinkles, neutral oil, vanilla extract, and almond extract. Top with a buttery icing, extra sprinkles, and whipped cream. Now that’s a party!",
                            "Million dollar pie is a classic icebox pie made with pecans, coconut, and pineapple in a whipped cream filling spread over a crumbly graham cracker crust."];

function createImgNodes() {
    const images = [];
    const imgSrcs = importImages(require.context('./../img', false, /\.(png|jpe?g|svg)$/));

    for (let i = 0; i < 6; i++) {
        images.push(new Image());
        images[i].classList.add(`img${i + 1}`);
        images[i].src = imgSrcs[i];
    }
    return images;
}

function createRecipeCards() {
    const imgArr = createImgNodes();
    const cardNodesArr = [];

    for (let i = 0; i < 6; i++) {
        cardNodesArr.push(document.createElement('div'));
        cardNodesArr[i].classList.add("recipeCard", `${i + 1}`);

        const recipeName = document.createElement("h2");
        recipeName.textContent = recipeNamesArr[i];

        const imgAndDescr = document.createElement("div");
        const descr = document.createElement('p');
        descr.textContent = recipeDescrArr[i];
        imgAndDescr.append(imgArr[i], descr);
        
        cardNodesArr[i].append(recipeName, imgAndDescr);
    }
    return cardNodesArr;
}

function createMenuDiv(contentDivNode) {
    const newElement = document.createElement('div');
    newElement.classList.add("menu");

    const h1 = document.createElement('h1');
    h1.textContent = "Featured Menu";
    newElement.appendChild(h1);

    const menuGrid = document.createElement('div');
    menuGrid.classList.add("menuGrid");

    const recipeCards = createRecipeCards();
    for (let i = 0; i < 6; i++) {
        menuGrid.appendChild(recipeCards[i]);
    }
    newElement.appendChild(menuGrid);

    contentDivNode.appendChild(newElement);
}

