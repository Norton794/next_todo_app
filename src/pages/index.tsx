import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
export default function Home() {

  

  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 49, "2"),
    new Cliente("Carla", 30, "3"),
    new Cliente("Dani", 24, "4"),
    
  ];

  function clienteSelecionado (cliente:Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido (cliente:Cliente){
    console.log(cliente.nome)
  }

  return (
    <div
      className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white`}
    >
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        ></Tabela>
      </Layout>
    </div>
  );
}
