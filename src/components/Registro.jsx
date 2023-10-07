import SocialButton from "./socialButton";
import Formulario from "./Formulario";

const Registro = () => {
  return (
    <>
      <main>
        <h1>Crea una cuenta</h1>
        <SocialButton
          icono1="fa-brands fa-facebook fa-xl"
          icono2="fa-brands fa-github fa-xl"
          icono3="fa-brands fa-linkedin-in fa-xl"
        />
        <Formulario />
      </main>
    </>
  );
};
export default Registro;
