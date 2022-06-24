import data from './data.json' assert { type: 'json' };

// ||SOLUTION 1 ||

// const amountElementsNodeList = document.querySelectorAll(".amount");
// const barElementsNodeList = document.querySelectorAll(".bar__component");
// const loadChart = document.querySelector(".load-chart");
// // get current date and day
// const getCurrentDay = function () {
//   const date = new Date();
//   let currentDay = date.getDay() - 1;
//   if (currentDay < 0) return 6;
//   return currentDay + 1;
// };
// // Render bars in the DOM
// const displayBars = function () {
//   data.forEach((obj, index) => {
//     amountElementsNodeList[index].textContent = `$${obj.amount}`;
//     barElementsNodeList[index].style.height = `${parseInt(obj.amount / 3)}rem`;
//     if (index === getCurrentDay()) {
//       document.querySelector(`.bar--${index}`).classList.add("active-bar");
//     }
//   });
// };

// loadChart.addEventListener("click", (e) => {
//   e.preventDefault();
//   displayBars();
// });

// ||SOLUTION 2 ||

const barsContainer = document.querySelector('.bars__container');
const loadChart = document.querySelector('.load-chart');

// Get Current Day
const getCurrentDay = function () {
  const date = new Date();
  let currentDay = date.getDay() - 1;
  if (currentDay < 0) return 6;
  return currentDay;
};
let currentDay;

//Generate Bar Template
const barsTemplate = function (chartObject, index) {
  let barHeight = parseInt(chartObject.amount / 3);

  return `
  <div class="bar">
  <p class="amount" >$${chartObject.amount}</p>
  <div class="bar__component bar--${index} ${
    index === currentDay ? 'active-day' : ''
  }" style="height:${barHeight}rem"></div>
  <p class="week-day">${chartObject.day}</p>
  </div>
  `;
};

// Render Bar Chart to the DOM
const renderBar = function (data) {
  console.log(currentDay);
  data.forEach((object, index) => {
    const markup = barsTemplate(object, index);
    barsContainer.insertAdjacentHTML('beforeend', markup);
  });
};
// Render Bar Chart on Button click
loadChart.addEventListener('click', e => {
  e.preventDefault();
  barsContainer.innerHTML = '';
  currentDay = getCurrentDay();
  renderBar(data);
});
