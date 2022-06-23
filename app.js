import data from './data.json' assert { type: 'json' };

const amountElementsNodeList = document.querySelectorAll('.amount');
const barElementsNodeList = document.querySelectorAll('.bar__component');

// get current date and day
const getCurrentDay = function () {
  const date = new Date();
  let currentDay = date.getDay() - 1;
  if (currentDay < 0) return 6;
  return currentDay + 1;
};
// Render bars in the DOM
const displayBars = function () {
  data.forEach((obj, index) => {
    amountElementsNodeList[index].textContent = `$${obj.amount}`;
    barElementsNodeList[index].style.height = `${parseInt(obj.amount / 3)}rem`;
    if (index === getCurrentDay()) {
      document.querySelector(`.bar--${index}`).classList.add('active-bar');
    }
  });
};
