import { useState } from "react";
import Cliente from "../core/Cliente";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  cliente: Cliente;
  cancel?: () => void;
  clienteChanged?: (cliente: Cliente) => void
}

export default function Form(props: FormProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div className="">
      {id ? <Input text="Código" value={id} type="text" readOnly /> : false}
      <Input text="Nome" value={nome} onChange={setNome} type="text" />
      <Input text="Idade" value={idade} onChange={setIdade} type="number" />

      <div className="mt-7 flex justify-end">
        <Button color="blue" className="mr-2"
        onClick={()=>props.clienteChanged?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={props.cancel}>Cancelar</Button>
      </div>
    </div>
  );
}
