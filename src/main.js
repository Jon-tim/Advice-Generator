const dice = document.querySelector(".dice");
const adviceBox = document.querySelector(".advice");
const adviceIndex = document.querySelector(".advice-id");

const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  // console.log(data);
  // console.log(data.slip.id);
  // console.log(data.slip.advice);

  // console.log(response);
  return data;
};

dice.addEventListener("click", () => {
  getAdvice()
    .then((data) => {
      adviceBox.textContent = `"${data.slip.advice}"`;
      adviceIndex.textContent = `Advice #${data.slip.id}`;
    })
    .catch((err) => err);
});
