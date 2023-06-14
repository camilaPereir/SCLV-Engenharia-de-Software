// eslint-disable-next-line react/prop-types
const FormButtons = ({ cancelTarget, negativeTitle = "Cancelar", positiveTitle = "Salvar", buttonType = "submit", positiveAction = null }) => {
  return (
    <>
      {/* div.mt-2>a.btn.btn-secondary.me-2{Cancelar}[href='cancelTarget']+button.btn.btn-primary{Salvar} */}
      <div className="mt-3">
        <a href={cancelTarget} className="btn btn-secondary me-2">
          {negativeTitle}
        </a>
        <button className="btn btn-primary" type={buttonType} onClick={positiveAction}>
          {positiveTitle}
        </button>
      </div>
    </>
  );
};

export default FormButtons;
