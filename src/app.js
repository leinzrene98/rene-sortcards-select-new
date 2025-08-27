import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let drawnCards = [];
window.onload = function () {
  //write your code here
  document.getElementById("draw").addEventListener("click", function () {
    let arrNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
    let arrSign = ['♠', '♥', '♦', '♣'];
    let randomCardLine = document.getElementById("randomCards");
    let cardCount = document.getElementById("cardCount");
    let desireCardCount = parseInt(cardCount.value);
    console.log(desireCardCount);
    randomCardLine.innerHTML = "";
    drawnCards = [];
    for (let i = 0; i < desireCardCount; i++) {
      const randomCardNumberIndex = Math.floor(Math.random() * arrNumber.length);
      const randomCardSignIndex = Math.floor(Math.random() * arrSign.length);
      // let cardValue = arrNumber[randomCardNumberIndex] + arrSign[randomCardSignIndex];
      const number = arrNumber[randomCardNumberIndex];
      const sign = arrSign[randomCardSignIndex];
      let Element = document.createElement("div");
      Element.innerHTML = `
  <div class="card">
    <span class="top">${arrSign[randomCardSignIndex]}</span>
    <span class="center">${arrNumber[randomCardNumberIndex]}</span>
    <span class="bottom">${arrSign[randomCardSignIndex]}</span>
  </div>
`;
      randomCardLine.appendChild(Element);
      let cardDiv = Element.querySelector(".card");
      if (sign === '♥' || sign === '♦') {cardDiv.classList.add("red");
}
      drawnCards.push({
        number: number,
        sign: sign,
        element: Element
      });
    }
  });
  document.getElementById("sort").addEventListener("click", function () {
    const selectSortCard = document.getElementById("selectSortCard");
    selectSortCard.innerHTML = "";
    let cardCount = document.getElementById("cardCount");
    let desireCardCount = parseInt(cardCount.value);
    desireCardCount = parseInt(cardCount.value);
    const getCardValue = function (cardNumber) {
      if (cardNumber === "J") {
        return 11;
      };
      if (cardNumber === "Q") {
        return 12;
      };
      if (cardNumber === "K") {
        return 13;
      };
      if (cardNumber === "A") {
        return 14;
      };
      return parseInt(cardNumber);
    }
    for (let j = 0; j < desireCardCount; j++) {
      const newArr = [];
      for (let z = 0; z < desireCardCount - j - 1; z++) {
        const smallNumber = 0;
        // if (drawnCards[z].number > drawnCards[z + 1].number) {
        // }
        if (getCardValue(drawnCards[z].number) > getCardValue(drawnCards[z + 1].number)) {
          let temp = drawnCards[z];
          drawnCards[z] = drawnCards[z + 1];
          drawnCards[z + 1] = temp;
        }
      }
      const stepWrapper = document.createElement("div");
    stepWrapper.classList.add("sort-step");
    const stepTitle = document.createElement("p");
    stepTitle.innerText = `Step ${j + 1}:`;
    const cardsRow = document.createElement("div");
    cardsRow.classList.add("card-row");
    // Clone and add each card
    drawnCards.forEach(card => {
      const clone = card.element.cloneNode(true); // clone the <div class="card">...</div>
      cardsRow.appendChild(clone);
    });
    stepWrapper.appendChild(stepTitle);
    stepWrapper.appendChild(cardsRow);
    selectSortCard.appendChild(stepWrapper);
    }
  })
}