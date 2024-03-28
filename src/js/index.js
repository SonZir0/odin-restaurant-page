import 'normalize.css';
import './../css/style.css';
import homeInit from './home.js';

const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('.homeBtn');

homeBtn.addEventListener('click', () => {
    if (homeBtn.classList[1] !== 'currentTab') {
        clearContentDiv();
        toggleChosenStyle(homeBtn);
        homeInit(contentDiv);
    }
});

// dispatch event to display Home tab on page load
homeBtn.dispatchEvent(new MouseEvent("click"));

function toggleChosenStyle(targetBtn) {
    targetBtn.classList.toggle('currentTab');
}

function clearContentDiv() {
    if (contentDiv.children.length) {
        toggleChosenStyle(contentDiv.firstElementChild);
        contentDiv.firstChild.remove();
    }
};