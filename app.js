function calcular() {
  const distancia = document.getElementById("distancia").value;
  const consumo = document.getElementById("consumo").value;
  const precio = document.getElementById("precio").value;
  const integrantes = document.getElementById("integrantes").value;
  const porcentajes = document
    .getElementById("porcentajes")
    .value.split(",")
    .map((p) => parseInt(p));

  const gasolinaNecesaria = distancia / consumo;
  const costoTotal = gasolinaNecesaria * precio;
  const costoPorIntegrante = costoTotal / integrantes;

  const resultados = porcentajes.map((p) => (p * costoPorIntegrante) / 100);

  const resultado = `El costo total del viaje es de ${costoTotal.toFixed(
    2
  )}€, y cada integrante debe pagar ${costoPorIntegrante.toFixed(
    2
  )}€. Los resultados son: ${resultados
    .map((r) => r.toFixed(2) + "€")
    .join(", ")}.`;

  document.getElementById("resultado").innerHTML = resultado;
}
