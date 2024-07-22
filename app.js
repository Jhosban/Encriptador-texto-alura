function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function ocultarElemento(elemento) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.style.display = "none";
  return;
}

function mostrarElemento(elemento) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.style.display = "flex";
  return;
}

function encriptarTexto() {
  let textoEncriptar = document.getElementById("texto-encriptar").value;

  if (textoEncriptar == "") {
    swal({
      title: "Oops!",
      text: "Ingresa el texto que deseas encriptar",
      icon: "info",
    });
    return;
  }

  if (/^[a-z\s]+$/.test(textoEncriptar) == false) {
    swal({
      title: "Oops!",
      text: "Solo se aceptan letras minúsculas y sin acentos",
      icon: "error",
    });
    return;
  }

  let textoEncriptado = textoEncriptar
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  ocultarElemento(".contenido__desencriptar__imagen");
  ocultarElemento(".contenido__desencriptar__mensaje");
  ocultarElemento(".contenido__desencriptar__mensaje--parrafo");

  asignarTextoElemento("#texto-desencriptar", textoEncriptado);
  mostrarElemento(".contenido__desencriptar__texto");
  mostrarElemento(".contenido__desencriptar__boton--copiar");
}

function desencriptarTexto() {
  let textoDesencriptar = document.getElementById("texto-encriptar").value;

  if (textoDesencriptar == "") {
    swal({
      title: "Oops!",
      text: "Ingresa el texto que deseas desencriptar",
      icon: "info",
    });
    return;
  }

  if (/^[a-z0-9\s]+$/.test(textoDesencriptar) == false) {
    swal({
      title: "Oops!",
      text: "Solo se aceptan letras minúsculas y sin acentos",
      icon: "error",
    });
    return;
  }

  let textoDesencriptado = textoDesencriptar
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  ocultarElemento(".contenido__desencriptar__imagen");
  ocultarElemento(".contenido__desencriptar__mensaje");
  ocultarElemento(".contenido__desencriptar__mensaje--parrafo");

  asignarTextoElemento("#texto-desencriptar", textoDesencriptado);
  mostrarElemento(".contenido__desencriptar__texto");
  mostrarElemento(".contenido__desencriptar__boton--copiar");
}

function copiarTexto() {
  let textoCopiar = document.getElementById("texto-desencriptar").value;
  navigator.clipboard.writeText(textoCopiar);
  swal({
    title: "Copiado!",
    text: "Se ha copiado el texto en el portapapeles",
    icon: "success",
  });
  return;
}

ocultarElemento("#texto-desencriptar");
ocultarElemento(".contenido__desencriptar__boton--copiar");
