const SocialButton = ({ icono1, icono2, icono3 }) => {
  return (
    <>
      <div className="box1">
        <div className="box2">
          <i className={icono1}></i>
        </div>
        <div className="box2">
          <i className={icono2}></i>
        </div>
        <div className="box2">
          <i className={icono3}></i>
        </div>
      </div>
      <p>O usa tu email para registrarte</p>
    </>
  );
};
export default SocialButton;
