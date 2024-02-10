import { IColaborador } from "../../compartilhado/interfaces/IColaborador";
import "./Colaborador.css";

const Colaborador = ({ nome, cargo, imagem, corPrimaria }: IColaborador) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={imagem} alt="Fernando Mattos"></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
