import './../css/about.css';

export default createAboutDiv;

function createAboutDiv(contentDivNode) {
    const newElement = document.createElement('div');
    newElement.classList.add("about");

    const h1 = document.createElement('h1');
    h1.textContent = "About us";
    newElement.appendChild(h1);

    // quote section
    const quoteSection = document.createElement('section');
    quoteSection.classList.add('quoteSection');
    const quote = document.createElement('p');
    quote.textContent = '"Food is art, and food is love. And we should show love and appreciation for those who cook it by eating it with relish."';
    const quoteAuthor = document.createElement('p');
    quoteAuthor.textContent = '- Mark Bittman'
    quoteSection.append(quote, quoteAuthor);
    newElement.append(quoteSection);

    //story and philosophie section
    const aboutSection = document.createElement('section');
    aboutSection.classList.add('aboutSection');
    const part1 = document.createElement('p');
    const part2 = document.createElement('p');
    const part3 = document.createElement('p');
    const part4 = document.createElement('p');
    part1.textContent = "Since 2003, we've been dedicated to offering something that many have overlooked or disregarded — the art of cooking, honed through traditions and history.";
    part2.textContent = "But our food experts are more than just pros at their craft. They are people who care about the food you eat. They are people who bring innovation into our kitchens.";
    part3.textContent = "Our restaurant is the place where tradition meets innovation, where the aromatic spices of centuries-old recipes are blended with modern techniques to create a symphony of flavors that tantalize the taste buds.";
    part4.textContent = "At our core, we believe the most meaningful dishes are those savored and enjoyed.";
    aboutSection.append(part1, part2, part3, part4);
    newElement.append(aboutSection);

    contentDivNode.appendChild(newElement);
}