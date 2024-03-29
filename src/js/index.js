import 'normalize.css';
import './../css/style.css';
import homeInit from './home.js';
import aboutInit from './about.js';
import menuInit from './menu.js';

export default importAllImages;

const contentDiv = document.querySelector('#content');
const homeBtn = document.querySelector('.homeBtn');
const aboutBtn = document.querySelector('.aboutBtn');
const menuBtn = document.querySelector('.menuBtn');

homeBtn.addEventListener('click', () => {
    if (homeBtn.classList[1] !== 'currentTab') {
        clearContentDiv();
        toggleCurrentTab(homeBtn);
        homeInit(contentDiv);
    }
});
// dispatch event to display Home tab on page load
homeBtn.dispatchEvent(new MouseEvent("click"));

aboutBtn.addEventListener('click', () => {
    if (aboutBtn.classList[1] !== 'currentTab') {
        clearContentDiv();
        toggleCurrentTab(aboutBtn);
        aboutInit(contentDiv);
    }
});

menuBtn.addEventListener('click', () => {
    if (menuBtn.classList[1] !== 'currentTab') {
        clearContentDiv();
        toggleCurrentTab(menuBtn);
        menuInit(contentDiv);
    }
});

function toggleCurrentTab(targetBtn) {
    targetBtn.classList.toggle('currentTab');
};

function clearContentDiv() {
    if (contentDiv.children.length) {
        toggleCurrentTab(document.querySelector('.currentTab'));
        contentDiv.removeChild(contentDiv.firstElementChild);
    }
};

function importAllImages(requireContext) {
    let images = {};
    requireContext.keys().map( (item, index) => {
        images[item.replace('./', '')] = requireContext(item);
    } );
    return Object.values(images);
}