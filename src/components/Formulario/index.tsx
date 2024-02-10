import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { IColaborador } from "../../compartilhado/interfaces/IColaborador";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void
  times: string[]
}

const Formulario = (props: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={e => aoSalvar(e)}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
        />
        <CampoTexto
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
        />
        <ListaSuspensa
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          obrigatorio={true}
          label="Time"
          itens={props.times}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
