import Cliente from "../core/Cliente"
interface TabelaProps{
    clientes: Cliente[]
}


export default function Tabela(props: TabelaProps){
    return(
        <table>
            <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>Idade</th>
            </tr>
        </table>
    )
}