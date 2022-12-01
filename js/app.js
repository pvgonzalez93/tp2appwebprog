if(navigator.serviceWorker){
  navigator.serviceWorker.register('./sw.js')
}

document.getElementById('formNotas').addEventListener('submit', guardarNotas);

function guardarNotas(e) {
  let titulo = document.getElementById('titulo').value;
  let fecha = document.getElementById('fecha').value;
 

  let nota = {
    titulo,
    fecha
  };

  if(localStorage.getItem('notas') === null) {
    let notas = [];
    notas.push(nota);
    localStorage.setItem('notas', JSON.stringify(notas));
  } else {
    let notas = JSON.parse(localStorage.getItem('notas'));
    notas.push(nota);
    localStorage.setItem('notas', JSON.stringify(notas));
  }

  obtenerNotas();
  document.getElementById('formNotas').reset();
  e.preventDefault();
}

function borrarNotas(titulo) {
  let notas = JSON.parse(localStorage.getItem('notas'));
  for(let i = 0; i < notas.length; i++) {
    if(notas[i].titulo == titulo) {
      notas.splice(i, 1);
    }
  }
  
  localStorage.setItem('notas', JSON.stringify(notas));
  obtenerNotas();
}

function obtenerNotas(){
 

  let notas = JSON.parse(localStorage.getItem('notas'));
  if(!notas){
    notas = [];
  }
  let verNotas= document.getElementById('notas');
  verNotas.innerHTML = '';
  for(let i = 0; i < notas.length; i++) {
    let titulo = notas[i].titulo;
    let fecha = notas[i].fecha;

    verNotas.innerHTML +=
     `<div class="card mb-3">
        <div class="card-body">
          <p>${titulo} <img src="icons/icon-72x72.png" alt="icono_de_notas"> - ${fecha}
          <a href="#" onclick="borrarNotas ('${titulo}')" class="btn btn-danger ml-5">Borrar</a>
          </p>
        </div>
      </div>`;
  }
}

obtenerNotas();
