import { IColaborador } from "../../compartilhado/interfaces/IColaborador";
import Colaborador from "../Colaborador";
import "./Time.css";

interface TimeProps {
  corSecundaria: string;
  corPrimaria: string;
  nome: string;
  colaboradores: IColaborador[];
}

const Time = (props: TimeProps) => {
  const corSecundaria = { backgroundColor: props.corSecundaria };
  const corPrimaria = { borderColor: props.corPrimaria };

  return props.colaboradores.length > 0 ? (
    <section className="time" style={corSecundaria}>
      <h3 style={corPrimaria}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            corPrimaria={props.corPrimaria}
          />
        ))}
      </div>
    </section>
  ) : (
    <></>
  );
};

export default Time;
