import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      password: "",
      passwordValid: false,
      passwordError: ""
    };
    this.validarPassword = this.validarPassword.bind(this);
  }

  validarPassword(e) {
    const password = e.target.value;
    let passwordError = "";
    let passwordValid = false;
    let mayusculas = false;
    let minusculas = false;
    let tamaño = false;
    let letrasRepetidas = false;
    let numeros = 0;
    let cantEspecuales = 0;
    var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
    let usa0 = false;
    let espacios = false;
    let cont = 0

    // Validaciones de password
    if (password.length >= 16) {
      passwordError = "Debe tener al menos 16 caracteres";
      passwordValid = true;
      tamaño = true;
    }
    while (!espacios && (cont < password.length)) {
      if (password.charAt(cont) === " ")
        espacios = true;
      cont++;
    }

    for (var i = 0; i < password.length; i++) {
      if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
        passwordValid = true;
        mayusculas = true;
      }
      if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
        passwordValid = true;
        minusculas = true;
      }
      if (password[i] === password[i + 1]) {
        passwordValid = true;
        letrasRepetidas = true;
      }

      if (!isNaN(password[i])) {
        numeros++;
        passwordValid = true;
      }
      if (special.indexOf(password[i]) !== -1) {
        passwordValid = true;
        cantEspecuales++;
      }
      if (password[i].includes("0")) {
        passwordValid = true;
        usa0 = true
      }
    }

    this.setState({
      password,
      passwordValid,
      passwordError,
      numeros,
      cantEspecuales,
      mayusculas,
      minusculas,
      letrasRepetidas,
      tamaño,
      usa0,
      espacios,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Validación de Password</h1>
        </header>
        <div className="App-intro">
          <div>
            {this.state.password.length < 16 && this.state.password.length >= 1 ? (<div className="valido">Debe tener al menos 16 caracteres</div>) : (<div className="error">Debe tener al menos 16 caracteres</div>)}
          </div>
          <div>
            {this.state.numeros > 4 ? (<div className="valido">Debe contener al menos 4 números</div>) : (<div className="error">Debe contener al menos 4 números</div>)}
          </div>
          <div>
            {this.state.mayusculas === true && this.state.minusculas === true ? (<div className="valido">Debe tener letras minúsculas y mayúsculas</div>) : (<div className="error">Debe tener letras minúsculas y mayúsculas</div>)}
          </div>
          <div>
            {this.state.letrasRepetidas === false ? (<div className="valido">No puede tener 2 caracteres iguales consecutivos</div>) : (<div className="error">No puede tener 2 caracteres iguales consecutivos</div>)}
          </div>
          <div>
            {this.state.cantEspecuales >= 2 ? (<div className="valido">Debe tener al menos 2 caracteres especiales</div>): (<div className="error">Debe tener al menos 2 caracteres especiales</div>)}
          </div>
          <div>
            {this.state.usa0 === false ? (<div className="valido">No se puede usar el número 0.</div>): (<div className="error">No se puede usar el número 0.</div>)}
          </div>
          <div>
            {this.state.espacios === false ? (<div className="valido">No se puede colocar espacios.</div>): (<div className="error">No se puede colocar espacios.</div>)}
          </div>
          <p
            className={this.state.passwordValid ? "color-verde" : "color-rojo"}
          >
            {this.state.passwordError}
          </p>
          <input
            type="password"
            value={this.state.password}
            onChange={this.validarPassword}
          />
        </div>
      </div>
    );
  }
}

export default App;
