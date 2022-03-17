import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";
export default function Home() {

  const {selecionarCliente, excluirCliente, obterTodos, salvarCliente, novoCliente, tabelaVisible, exibirTabela, formVisible, cliente, clientes} = useClientes()
  
  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white`}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisible ? (
          <>
            <div className="flex justify-end">
              <Button onClick={novoCliente} color="green" className="mb-4">
                Novo Cliente
              </Button>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Form clienteChanged={salvarCliente} cancel={exibirTabela} cliente={cliente} />
        )}
      </Layout>
    </div>
  );
}
