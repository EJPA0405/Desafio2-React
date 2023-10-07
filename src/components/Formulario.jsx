import { useState } from "react";
import Swal from "sweetalert2";
import Alert from "./Alert";

const Formulario = ({ validardatos }) => {
  //Estados del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(false);
  const [errorEmail, setErroremail] = useState(false);

  var validaEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  //Función antes de enviar el formulario
  const validarDatos = (e) => {
    // Prevenimos el comportamiento por defecto
    e.preventDefault();
    //Validación
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password1.trim() === "" ||
      password2.trim() === ""
    ) {
      setError(true);
      return;
    }
    if (password1 != password2) {
      //setErrorpass(true);
      Swal.fire({
        title: "Error!",
        text: "las contraseñas No coinciden",
        icon: "error",
        showConfirmButton: false,
      });
      return;
    }
    Swal.fire("Registro Exitoso!");

    //Eliminar mensaje de error
    setError(false);
    setNombre("");
    setEmail("");
    setPassword1("");
    setPassword2("");
    setErroremail("");
  };
  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group">
          <label></label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="password"
            name="password1"
            placeholder="Contraseña"
            className="form-control"
            onChange={(e) => setPassword1(e.target.value)}
            value={password1}
          />
        </div>
        <div className="form-group">
          <label></label>
          <input
            type="password"
            name="password2"
            placeholder="Confirma tu contraseña"
            className="form-control"
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
          />
        </div>
        <br />
        <div className="form-group">
          <button type="submit" className=" form-control btn btn-success">
            Registrarse
          </button>
        </div>
        <br />
        {error ? <Alert /> : null}
      </form>
    </>
  );
};
export default Formulario;
