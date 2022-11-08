let p1 = prompt("Nombre del Jugador:");
let p2 = prompt("Nombre del oponente:");
let vidap1 = 20 ;
let vidap2 = 20 ;

// funcion que llama player1 con el nombre ingresado
function pl1(){
  document.write(p1);
}

//  funcion que llama player2 con el nombre ingresado
  function pl2(){
    document.write(p2);
}  

// operaciones para p1
function sumarvida1() {
  vidap1 ++;
  document.getElementById("v1p").innerHTML = vidap1 ;
}

function restarvida1() {
  vidap1 --;
  document.getElementById("v1p").innerHTML = vidap1 ;
}
// operaciones p2
function sumarvida2() {
  vidap2 ++;
  document.getElementById("v2p").innerHTML = vidap2 ;
}

function restarvida2() {
  vidap2 --;
  document.getElementById("v2p").innerHTML = vidap2 ;
}

console.log(p1);
console.log(p2)


