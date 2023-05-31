function calcularGanancia() {
  const capital = parseFloat(document.getElementById("capital").value);
  if (capital >= 0 && capital <= 1000000) {
    const ganancia = capital * 0.02;
    document.getElementById("ganancia").textContent = `La ganancia después de un mes será: $${ganancia.toFixed(2)}`;
  } else {
    document.getElementById("ganancia").textContent = "Ingrese un valor válido dentro del rango de 0 a 1,000,000.";
  }
}

function calcularComisiones() {
  const ventas = parseFloat(document.getElementById("ventas").value);
  const sueldoBase = parseFloat(document.getElementById("sueldo-base").value);
  if (ventas >= 0 && ventas <= 1000000 && sueldoBase >= 0 && sueldoBase <= 1000000) {
    const comisiones = ventas * 0.1;
    const total = sueldoBase + comisiones;
    document.getElementById("comisiones").textContent = `Comisiones: $${comisiones.toFixed(2)}`;
    document.getElementById("total").textContent = `Total a recibir: $${total.toFixed(2)}`;
  } else {
    document.getElementById("comisiones").textContent = "Ingrese valores válidos dentro del rango de 0 a 1,000,000.";
    document.getElementById("total").textContent = "";
  }
}

function calcularDescuento() {
  const totalCompra = parseFloat(document.getElementById("total-compra").value);
  if (totalCompra >= 0 && totalCompra <= 1000000) {
    const descuento = totalCompra * 0.15;
    const totalPagar = totalCompra - descuento;
    document.getElementById("total-pagar").textContent = `Total a pagar: $${totalPagar.toFixed(2)}`;
  } else {
    document.getElementById("total-pagar").textContent = "Ingrese un valor válido dentro del rango de 0 a 1,000,000.";
  }
}

function calcularCalificacionFinal() {
  const califParcial1 = parseFloat(document.getElementById("calif-parcial1").value);
  const califParcial2 = parseFloat(document.getElementById("calif-parcial2").value);
  const califParcial3 = parseFloat(document.getElementById("calif-parcial3").value);
  const califExamen = parseFloat(document.getElementById("calif-examen").value);
  const califTrabajo = parseFloat(document.getElementById("calif-trabajo").value);

  if (
    califParcial1 >= 0 &&
    califParcial1 <= 100 &&
    califParcial2 >= 0 &&
    califParcial2 <= 100 &&
    califParcial3 >= 0 &&
    califParcial3 <= 100 &&
    califExamen >= 0 &&
    califExamen <= 100 &&
    califTrabajo >= 0 &&
    califTrabajo <= 100
  ) {
    const promedioParciales = (califParcial1 + califParcial2 + califParcial3) / 3;
    const califFinal = promedioParciales * 0.55 + califExamen * 0.3 + califTrabajo * 0.15;

    document.getElementById("calificacion-final").textContent = `Calificación Final: ${califFinal.toFixed(2)}`;
  } else {
    document.getElementById("calificacion-final").textContent = "Ingrese valores válidos dentro del rango de 0 a 100.";
  }
}

function calcularPorcentaje() {
  const totalEstudiantes = parseFloat(document.getElementById("total-estudiantes").value);
  const totalHombres = parseFloat(document.getElementById("total-hombres").value);

  if (totalEstudiantes >= 0 && totalEstudiantes <= 1000000 && totalHombres >= 0 && totalHombres <= 1000000) {
    const porcentajeHombres = (totalHombres / totalEstudiantes) * 100;
    const porcentajeMujeres = 100 - porcentajeHombres;

    document.getElementById("porcentaje-hombres").textContent = `Porcentaje de Hombres: ${porcentajeHombres.toFixed(2)}%`;
    document.getElementById("porcentaje-mujeres").textContent = `Porcentaje de Mujeres: ${porcentajeMujeres.toFixed(2)}%`;
  } else {
    document.getElementById("porcentaje-hombres").textContent =
      "Ingrese valores válidos dentro del rango de 0 a 1,000,000.";
    document.getElementById("porcentaje-mujeres").textContent = "";
  }
}

function calcularEdad() {
  const anioNacimiento = parseInt(document.getElementById("anio-nacimiento").value);
  const anioActual = new Date().getFullYear();

  if (anioNacimiento >= 0 && anioNacimiento <= anioActual) {
    const edad = anioActual - anioNacimiento;
    document.getElementById("edad").textContent = `Edad: ${edad} años`;
  } else {
    document.getElementById("edad").textContent = "Ingrese un valor válido dentro del rango de años.";
  }
}

function resetForm() {
  document.getElementById("problem-form").reset();
  document.getElementById("ganancia").textContent = "";
  document.getElementById("comisiones").textContent = "";
  document.getElementById("total").textContent = "";
  document.getElementById("total-pagar").textContent = "";
  document.getElementById("calificacion-final").textContent = "";
  document.getElementById("porcentaje-hombres").textContent = "";
  document.getElementById("porcentaje-mujeres").textContent = "";
  document.getElementById("edad").textContent = "";
}
