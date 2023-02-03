//manejo del encriptador y desencriptador:

function encriptador(mensaje){
    let msjEncriptado = '';
    for (let i = 0; i < mensaje.length; i++) {
      const char = mensaje[i];
      switch (char) {
        case 'a':
          msjEncriptado += 'ai';
          break;
        case 'e':
          msjEncriptado += 'enter';
          break;
        case 'i':
          msjEncriptado += 'imes';
          break;
        case 'o':
          msjEncriptado += 'ober';
          break;
        case 'u':
          msjEncriptado += 'ufat';
          break;
        default:
          msjEncriptado += char;
      }
    }
    return msjEncriptado;
}

function desencriptador(mensaje){
  let msjdesencriptado = '';
  let pruebaVocal = '';
  for (let i = 0; i < mensaje.length; i++) {
    const char = mensaje[i];
    switch (char) {
      case 'a':
        pruebaVocal = char+mensaje[i+1];
        if(pruebaVocal == 'ai'){
          msjdesencriptado += 'a';
          if(i+2 <= mensaje.length){
            i = i + 1;
          }else{
            i = mensaje.length-2;
          }
        }else{
          msjdesencriptado += 'a';
        }
        break;
      case 'e':
        pruebaVocal = char+mensaje[i+1]+mensaje[i+2]+mensaje[i+3]+mensaje[i+4];
        if(pruebaVocal == 'enter'){
          msjdesencriptado += 'e';
          if(i+5 <= mensaje.length){
            i = i + 4;
          }else{
            i = mensaje.length-2;
          }
          break;
        }else{
          msjdesencriptado += 'e';
        }
      break;
      case 'i':
        pruebaVocal = char+mensaje[i+1]+mensaje[i+2]+mensaje[i+3];
        if(pruebaVocal == 'imes'){
          msjdesencriptado += 'i';
          if(i+4 <= mensaje.length){
            i = i + 3;
          }else{
            i = mensaje.length-2;
          }
        break;
      }else{
        msjdesencriptado += 'i';
      }
        break;
      case 'o':
        pruebaVocal = char+mensaje[i+1]+mensaje[i+2]+mensaje[i+3];
        if(pruebaVocal == 'ober'){
          msjdesencriptado += 'o';
          if(i+4 <= mensaje.length){
            i = i + 3;
          }else{
            i = mensaje.length-2;
          }
        break;
      }else{
        msjdesencriptado += 'o';
      }
        break;
      case 'u':
        pruebaVocal = char+mensaje[i+1]+mensaje[i+2]+mensaje[i+3];
        if(pruebaVocal == 'ufat'){
          msjdesencriptado += 'u';
          if(i+4 <= mensaje.length){
            i = i + 3;
          }else{
            i = mensaje.length-2;
          }
          break;
        }else{
          msjdesencriptado += 'u';
        }
        break;
      default:
        msjdesencriptado += char;
    }
  }
  return msjdesencriptado;
}

function manejadorSiEsEoD(id, mensaje){
  if(id == 'btnEncriptar'){
    cambiarTxtAEyD(encriptador(mensaje));
  }else if(id == 'btnDesencriptar'){
    cambiarTxtAEyD(desencriptador(mensaje));
  }else{
    alert('error');
  }
}

//funciones para el manejo de la luz de los conenedores:
function activarF(idEncender, idApagar){
    encenderFondo(idEncender);
    apagarFondo(idApagar);
  }

  function apagarFondo (idEditar){
    let element = document.querySelector(idEditar);
    element.style.setProperty("--opacity", "0", "important");
  }

  function encenderFondo(idEditar){
    let element = document.querySelector(idEditar);
    element.style.setProperty("--opacity", "1", "important");
  }
 //funcion usada para apagar por defecto al iniciar la pagina el segundo fondo
  function apagarSegundoFondo(){
    let element = document.querySelector('#divTxtAreaNoEditable');
    element.style.setProperty("--opacity", "0", "important");
  }
  //funciones para manejar el frontend:
  const verificarTexto = (idEncender, idApagar, id) => {
    let mensaje = document.getElementById('txtAreaMensaje').value;
    if (mensaje === '') {
      alert('Escriba un mensaje');
    } else if (!comprobarMinusculas(mensaje)) {
      alert('El mensaje tiene que estar en minúsculas y sin tildes');
    } else {
      activarF(idEncender, idApagar);
      manejadorSiEsEoD(id, mensaje);
    }
}
const verificarTextoEyD = (idEncender, idApagar) => {
    let mensajeEyD = document.getElementById('txtAreaMensajeEyD').value;
    if(mensajeEyD!=''){
        activarF(idEncender, idApagar);
    }else{
        alert('encripte o desencripte un mensaje antes de copiar');
    }
}
  function comprobarMinusculas(cadena) {
    return /^[a-z\s\d\!\@\#\$\%\^\&\*\(\)\_\+\{\}\:\"\<\>\?\[\]\\\;\',\.\/]+$/i.test(cadena);
  }

  function cambiarTxtAEyD(mensaje){
    let txtArea = document.getElementById('txtAreaMensajeEyD');
    txtArea.innerHTML = mensaje;
  }

function borrar(){
  let borrarEyD = document.getElementById('txtAreaMensajeEyD');
  document.getElementById('txtAreaMensaje').value ='';
  borrarEyD.innerHTML= '';
  apagarFondo('#divTxtAreaNoEditable');
  encenderFondo('#divTxtAreaEditable');
}

function btnCopiar() {
  let textArea = document.getElementById("txtAreaMensajeEyD");
  if(textArea.value != ''){
    textArea.select();
    document.execCommand("copy");
    apagarFondo('#divTxtAreaNoEditable');
    encenderFondo('#divTxtAreaEditable');
    alert('Texto copiado');
  }else{
    alert('no hay texto para copiar, encripte o desencripte un mensaje')
  }
}