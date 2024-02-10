import "./ListaSuspensa.css";

interface ListaSuspensaProps {
  aoAlterado: (valor: string) => void;
  label: string;
  valor: string;
  obrigatorio: boolean;
  itens: string[];
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(evento: React.ChangeEvent<HTMLSelectElement>) =>
          props.aoAlterado(evento.target.value)
        }
        required={props.obrigatorio}
        value={props.valor}
      >
        <option value=""></option>
        {props.itens &&
          props.itens.map((item) => {
            return <option key={item}>{item}</option>;
          })}
      </select>
    </div>
  );
};

export default ListaSuspensa;
