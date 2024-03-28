import 'normalize.css';
import './../css/style.css';
import homeInit from './home.js';
import aboutInit from './about.js';

const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('.homeBtn');
const aboutBtn = document.querySelector('.aboutBtn');

homeBtn.addEventListener('click', () => {
    if (homeBtn.classList[1] !== 'currentTab') {
        clearContentDiv();
        toggleChosenStyle(homeBtn);
        homeInit(contentDiv);
    }
});

// dispatch event to display Home tab on page load
homeBtn.dispatchEvent(new MouseEvent("click"));

aboutBtn.addEventListener('click', () => {
    if (aboutBtn.classList[1] !== 'currentTab') {
        clearContentDiv();
        toggleChosenStyle(aboutBtn);
        aboutInit(contentDiv);
    }
});

function toggleChosenStyle(targetBtn) {
    targetBtn.classList.toggle('currentTab');
}

function clearContentDiv() {
    if (contentDiv.children.length) {
        toggleChosenStyle(document.querySelector('.currentTab'));
        contentDiv.removeChild(contentDiv.firstElementChild);
    }
};