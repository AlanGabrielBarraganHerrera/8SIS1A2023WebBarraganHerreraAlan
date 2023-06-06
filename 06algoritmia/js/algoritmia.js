function invertirPalabras() {
    var palabras = document.getElementById('p1-input').value;
    var palabrasArray = palabras.split(' ');
    var palabrasInvertidas = palabrasArray.reverse().join(' ');
    document.getElementById('p1-output').textContent = palabrasInvertidas;
  }

  function Problema2() {
    var x1 = parseInt(document.getElementById('p2-x1').value);
    var x2 = parseInt(document.getElementById('p2-x2').value);
    var x3 = parseInt(document.getElementById('p2-x3').value);
    var x4 = parseInt(document.getElementById('p2-x4').value);
    var x5 = parseInt(document.getElementById('p2-x5').value);
  
    var y1 = parseInt(document.getElementById('p2-y1').value);
    var y2 = parseInt(document.getElementById('p2-y2').value);
    var y3 = parseInt(document.getElementById('p2-y3').value);
    var y4 = parseInt(document.getElementById('p2-y4').value);
    var y5 = parseInt(document.getElementById('p2-y5').value);
  
    var productoEscalar = x1 * y1 + x2 * y2 + x3 * y3 + x4 * y4 + x5 * y5;
  
    document.getElementById('p2-output').textContent = productoEscalar;
  }
  
  

function problema2(){

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;
    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

v1 = v1.sort(function(a, b){
    return b-a;
});
v2 = v2.sort(function(a, b){
    return b-a;
});

var p2_producto = 0;

for(var i = 0; i < v1.length; i++){
    p2_producto += v1[i]*v2[i];
}

document.querySelector('#p2-outout').textContent = 'Producto Escalar Minimo : ' + p2_producto;

}


function contarCaracteresUnicos() {
    var palabras = document.getElementById('p3-input').value;
    var palabrasArray = palabras.split(',');
  
    var palabraMasLarga = '';
    var maxCaracteresUnicos = 0;
  
    palabrasArray.forEach(function(palabra) {
      var caracteresUnicos = new Set(palabra).size;
      if (caracteresUnicos > maxCaracteresUnicos) {
        maxCaracteresUnicos = caracteresUnicos;
        palabraMasLarga = palabra;
      }
    });
  
    document.getElementById('p3-output').textContent = palabraMasLarga;
  }