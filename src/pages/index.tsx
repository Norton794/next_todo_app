import Layout from "../components/Layout";
export default function Home() {
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white`}>
     <h1>App</h1>
     <Layout titulo="Cadastro Simples">Conteudo</Layout>
    </div>
  )
}
