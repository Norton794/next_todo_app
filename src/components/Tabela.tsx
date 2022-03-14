import Cliente from "../core/Cliente";
import { IconeEdit, IconeTrash } from "./Icons";
import ActionButton from "./ActionButton";
interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Codigo</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? (<th className="p-4">Ações</th>) : false}
      </tr>
    );
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {props.clienteSelecionado ? (
          <ActionButton onClick={()=>props.clienteSelecionado?.(cliente)} color="green">{IconeEdit}</ActionButton>
        ) : (
          false
        )}

        {props.clienteExcluido ? (
          <ActionButton onClick={()=>props.clienteExcluido?.(cliente)} color="red">{IconeTrash}</ActionButton>
        ) : (
          false
        )}
      </td>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((c, i) => {
      return (
        <tr
          key={c.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className="text-left p-4">{c.id}</td>
          <td className="text-left p-4">{c.nome}</td>
          <td className="text-left p-4">{c.idade}</td>
          {exibirAcoes ? renderizarAcoes(c) : false}
        </tr>
      );
    });
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
}
