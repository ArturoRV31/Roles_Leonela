const meseros = [
  "Alejandra",
  "Villamar",
  "Gael",
  "Sebastian",
  "Yariel",
  "Arturo",
  "Omar",
  "Jared",
  "Andrea",
  "Miroslava",
  "Alexandra",
  "Dayana",
  "Esteban",
  "Paglery",
];

function generarCheckboxes() {
  const listaMeseros = document.querySelector(".listaMeseros");
  let html = "";

  meseros.forEach((mesero, index) => {
    html += `
      <input type="checkbox" class="checkbox" id="checkbox_${index + 1}" />
      <label for="checkbox_${index + 1}" class="item">
        <div class="check">
          <i class="bx bx-circle"></i>
          <i class="bx bxs-check-circle"></i>
        </div>
        <h2>${mesero}</h2>
      </label>
    `;
  });

  listaMeseros.innerHTML = html;
}

window.addEventListener("DOMContentLoaded", generarCheckboxes);
