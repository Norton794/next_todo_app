import { useState } from "react";
import Cliente from "../core/Cliente";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  cliente: Cliente;
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
        <Button color="blue" className="mr-2">{id ? "Alterar" : "Salvar"}</Button>
        <Button>Cancelar</Button>
      </div>
    </div>
  );
}
