function validar() {
  const distancia = document.getElementById("distancia").value;
  const consumo = document.getElementById("consumo").value;
  const precio = document.getElementById("precio").value;

  if (!distancia || !consumo || !precio) {
    alert(
      "Por favor, rellene los campos de distancia, consumo y precio de la gasolina"
    );
    return false;
  }

  return true;
}

function calcular() {
  if (validar()) {
    const distancia = document.getElementById("distancia").value;
    const consumo = document.getElementById("consumo").value;
    const precio = document.getElementById("precio").value;
    const integrantes = document.getElementById("integrantes").value;
    const gasolinaNecesaria = distancia / consumo;
    const costoTotal = gasolinaNecesaria * precio;

    let resultadoTotal;

    if (!integrantes) {
      resultadoTotal = `El costo total del viaje es de ${costoTotal.toFixed(
        2
      )}€`;
    } else {
      const costoPorIntegrante = costoTotal / integrantes;
      resultadoTotal = `El costo total del viaje es de ${costoTotal.toFixed(
        2
      )}€, y cada integrante debe pagar ${costoPorIntegrante.toFixed(2)}€.`;
    }

    document.getElementById("resultado").innerHTML = resultadoTotal;
  }
}
