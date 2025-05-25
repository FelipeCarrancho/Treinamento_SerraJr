let cont = 0;
let formCont = document.querySelector(".form-cont");
let formButton = document.querySelector(".form-button");

formButton.addEventListener("click", handleformButton);

function handleformButton() {
  if (cont >= 4) {
    alert("NÚMERO MÁXIMO ATINGIDO");
  } else {
    cont += 1;
    formCont.innerHTML = cont;
  }
}
