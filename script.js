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

  // Generar los checkboxes
  meseros.forEach((mesero, index) => {
    html += `
      <input type="checkbox" class="checkbox" id="checkbox_${index}" />
      <label for="checkbox_${index}" class="item">
        <div class="check">
          <i class="bx bx-circle"></i>
          <i class="bx bxs-check-circle"></i>
        </div>
        <h2>${mesero}</h2>
      </label>
    `;
  });

  listaMeseros.innerHTML = html;

  // Botón para borrar los checks
  document.getElementById("borrarChecksBtn").addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
      checkbox.nextElementSibling.classList.remove("checked");
    });
  });

  // Botón para aceptar selección
  document.getElementById("aceptarChecksBtn").addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".checkbox");
    const selectedMeseros = [];

    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        selectedMeseros.push(meseros[index]);
      }
    });

    if (selectedMeseros.length < 5) {
      Swal.fire({
        title: "Selección incompleta",
        text: `Debes seleccionar al menos 5 meseros. Has seleccionado ${selectedMeseros.length}`,
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Meseros seleccionados",
        html: `<strong>${selectedMeseros.join(", ")}</strong>`,
        icon: "success",
      });
      // Aquí falta agregar la lógica para enviar los datos al servidor o procesarlos según sea necesario.
      console.log("Meseros seleccionados:", selectedMeseros);
      switch (selectedMeseros.length) {
        case 5:
          Swal.fire({
            title: "¡Excelente!",
            text: "Has seleccionado 5 meseros.",
            icon: "success",
          });
          break;
        case 6:
          Swal.fire({
            title: "¡Muy bien!",
            text: "Has seleccionado 6 meseros.",
            icon: "success",
          });
          break;
        case 7:
          Swal.fire({
            title: "¡Perfecto!",
            text: "Has seleccionado 7 meseros.",
            icon: "success",
          });
          break;
        default:
          Swal.fire({
            title: "¡Increíble!",
            text: `Has seleccionado ${selectedMeseros.length} meseros.`,
            icon: "success",
          });
      }
    }
  });

  // Evento para cada checkbox
  document.querySelectorAll(".checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const label = this.nextElementSibling;
      label.classList.toggle("checked", this.checked);
    });
  });
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", generarCheckboxes);
