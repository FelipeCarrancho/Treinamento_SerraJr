function somar() {
  let sumtn1 = document.getElementById("sum-number1");
  let sumtn2 = document.getElementById("sum-number2");
  let sum1 = Number(sumtn1.value);
  let sum2 = Number(sumtn2.value);
  let sum = sum1 + sum2;
  document.getElementById("sumResult").value = sum;
}

function subtrair() {
  let subtn1 = document.getElementById("sub-number1");
  let subtn2 = document.getElementById("sub-number2");
  let sub1 = Number(subtn1.value);
  let sub2 = Number(subtn2.value);
  sub = sub1 - sub2;
  document.getElementById("subResult").value = sub;
}

function multiplicar() {
  let multtn1 = document.getElementById("multn1");
  let multtn2 = document.getElementById("multn2");
  let mult1 = Number(multtn1.value);
  let mult2 = Number(multtn2.value);
  mult = mult1 * mult2;
  document.getElementById("multResult").value = mult;
}

function dividir() {
  let divisiontn1 = document.getElementById("division-number1");
  let divisiontn2 = document.getElementById("division-number2");
  let division1 = Number(divisiontn1.value);
  let division2 = Number(divisiontn2.value);
  let division = division1 / division2;
  if (division2 == 0) {
    alert("Essa divisão não existe");
    division = null;
  }
  document.getElementById("divisionResult").value = division;
}
