function add() {
  var texto = document.getElementById("txt_texto").value;
  document.getElementById("tarefa").innerHTML += "<b>Tarefa:</b>   " + texto + "</br>";
  document.getElementById("txt_texto").value = "";
  document.getElementById("txt_texto").focus();
}