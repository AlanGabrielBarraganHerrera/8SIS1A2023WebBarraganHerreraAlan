function calcularGanancia() {
  const capital = parseFloat(document.getElementById("capital").value);
  if (capital >= 0 && capital <= 1000000) {
    const ganancia = capital * 0.02;
    document.getElementById("ganancia").textContent = `La ganancia después de un mes será: $${ganancia.toFixed(3)}`;
  } else {
    document.getElementById("ganancia").textContent = "Ingrese un valor válido dentro del rango de 0 a 1,000,000.";
  }
}

  function calcularComisiones() {
    const venta1 = parseFloat(document.getElementById("venta1").value);
    const venta2 = parseFloat(document.getElementById("venta2").value);
    const venta3 = parseFloat(document.getElementById("venta3").value);
    const sueldoBase = parseFloat(document.getElementById("sueldo-base").value);

    if (
      venta1 >= 0 &&
      venta1 <= 1000000 &&
      venta2 >= 0 &&
      venta2 <= 1000000 &&
      venta3 >= 0 &&
      venta3 <= 1000000 &&
      sueldoBase >= 0 &&
      sueldoBase <= 1000000
    ) {
      const comisiones = (venta1 + venta2 + venta3) * 0.1;
      const total = sueldoBase + comisiones;
      document.getElementById("comisiones").textContent = `Comisiones: $${comisiones.toFixed(3)}`;
      document.getElementById("total").textContent = `Total a recibir: $${total.toFixed(3)}`;
    } else {
      document.getElementById("comisiones").textContent =
        "Ingrese valores válidos dentro del rango de 0 a 1,000,000.";
      document.getElementById("total").textContent = "";
    }
  }


function calcularDescuento() {
  const totalCompra = parseFloat(document.getElementById("total-compra").value);
  if (totalCompra >= 0 && totalCompra <= 1000000) {
    const descuento = totalCompra * 0.15;
    const totalPagar = totalCompra - descuento;
    document.getElementById("total-pagar").textContent = `Total a pagar: $${totalPagar.toFixed(3)}`;
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

    document.getElementById("calificacion-final").textContent = `Calificación Final: ${califFinal.toFixed(3)}`;
  } else {
    document.getElementById("calificacion-final").textContent = "Ingrese valores válidos dentro del rango de 0 a 100.";
  }
}

function calcularPorcentaje() {
  const totalEstudiantes = parseInt(document.getElementById("total-estudiantes").value);
  const totalHombres = parseInt(document.getElementById("total-hombres").value);

  if (!isNaN(totalEstudiantes) && !isNaN(totalHombres)) {
    if (totalEstudiantes >= 10000 && totalHombres >= 10000) {
      const porcentajeHombres = Math.round((totalHombres / totalEstudiantes) * 100);
      const porcentajeMujeres = 100 - porcentajeHombres;

      document.getElementById("porcentaje-hombres").textContent = `Porcentaje de Hombres: ${porcentajeHombres}%`;
      document.getElementById("porcentaje-mujeres").textContent = `Porcentaje de Mujeres: ${porcentajeMujeres}%`;
    } else {
      alert("El total de estudiantes y el total de hombres deben ser iguales o mayores a 10,000.");
      document.getElementById("porcentaje-hombres").textContent = "";
      document.getElementById("porcentaje-mujeres").textContent = "";
    }
  } else {
    document.getElementById("porcentaje-hombres").textContent = "Ingrese valores numéricos válidos para el total de estudiantes y el total de hombres.";
    document.getElementById("porcentaje-mujeres").textContent = "";
  }
}



function calcularEdad() {
  const anioNacimiento = parseInt(document.getElementById("anio-nacimiento").value);
  const anioActual = new Date().getFullYear();

  if (anioNacimiento >= 1900 && anioNacimiento <= anioActual) {
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
