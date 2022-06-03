function validatePassword(password) {
  let mayusculas = false;
  let minusculas = false;
  let tamaño = false;
  let letrasRepetidas = false;
  let numeros = 0;
  let especiales = false;
  let cantEspecuales = 0;
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let usa0 = false;
  let espacios = false;
  let cont = 0

  if (password.length <= 16) {
    tamaño = true;
  }
  if (password.includes("0")) {
    usa0 = true;
  }
  while (!espacios && (cont < password.length)) {
    if (password.charAt(cont) == " ")
      espacios = true;
    cont++;
  }

  for (var i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      mayusculas = true;
    }
    console.log(isNaN(password[i]));
    if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
      minusculas = true;
    }
    if (password[i] === password[i + 1]) {
      letrasRepetidas = true;
    }

    if (!isNaN(password[i])) {
      numeros++;
    }
    if (special.indexOf(password[i]) !== -1) {
      especiales = true;
      cantEspecuales++;
    }
  }
  console.log(letrasRepetidas);
  console.log(mayusculas);
  console.log(minusculas);
  console.log(tamaño);
  console.log(numeros);
  console.log(especiales);
  console.log(usa0);
  console.log(espacios);

  if (
    mayusculas === true &&
    minusculas === true &&
    tamaño === true &&
    letrasRepetidas === false &&
    numeros >= 4 &&
    especiales === true &&
    cantEspecuales === 2 &&
    usa0 === false &&
    espacios === false
  ) {
    return true;
  }
  return false;
}

console.log(validatePassword("Ee@1@23456"));
