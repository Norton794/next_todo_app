import { useState } from "react";

export default function useTabelaOuForm() {
  const [visible, setVisible] = useState<"Form" | "Tabela">("Tabela");
  
  const exibirTabela = () => setVisible('Tabela')
  const exibirForm = () => setVisible('Form')

  return{
      formVisible: visible === 'Form',
      tabelaVisible: visible === 'Tabela',
      exibirTabela,
      exibirForm
  }
}
