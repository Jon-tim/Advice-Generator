const dice = document.querySelector(".dice");
const adviceBox = document.querySelector(".advice");
const adviceId = document.querySelector(".advice-id");

const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  adviceBox.textContent = `"${data.slip.advice}"`;
  adviceId.textContent = `advice #${data.slip.id}`;
};

dice.addEventListener("click", getAdvice);
