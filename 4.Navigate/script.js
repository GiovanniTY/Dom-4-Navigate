//Move the last child to the first row

const ol = document.querySelector('ol');
const firstChild = ol.firstElementChild;
const lastChild = ol.lastElementChild;
ol.insertBefore(lastChild,firstChild);

//
const firstSection = document.querySelectorAll('main section')[0];
const secondSection = document.querySelectorAll('main section')[1];
const thirdSection = document.querySelectorAll('main section')[2];

const firstH2 = firstSection.querySelector('h2');
const secondH2 = secondSection.querySelector('h2');
const thirdH2 = thirdSection.querySelector('h2');

secondSection.insertBefore(thirdH2, secondSection.firstChild);
thirdSection.insertBefore(firstChild, thirdSection.firstChild);

const lastSection = document.querySelector('main').lastElementChild;
lastSection.remove();