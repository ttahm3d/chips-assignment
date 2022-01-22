import "./styles.css";

const chipsContainer = document.querySelector(".chips-container");
const inputBox = document.querySelector(".chip-input-box");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  const chipsList = [];
  e.preventDefault();
  chipsList.push(inputBox.value);
  inputBox.value = "";

  chipsList.map(
    (chip) =>
      (chipsContainer.innerHTML += `
      <div class="chip">
        <p>${chip}</p>
				<i class="fas fa-times-circle close-btn" aria-hidden="true"></i>
      </div>
    `)
  );

  const removeChip = document.querySelectorAll(".close-btn");

  for (let i = 0; i < removeChip.length; i++) {
    removeChip[i].addEventListener("click", (e) => {
      chipsContainer.removeChild(e.target.parentNode);
    });
  }
});
