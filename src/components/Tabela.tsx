import Cliente from "../core/Cliente"
interface TabelaProps{
    clientes: Cliente[]
}


export default function Tabela(props: TabelaProps){

function renderizarCabecalho(){
    return(
            <tr>
                <th>Codigo</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
    );
}

function renderizarDados(){
return props.clientes?.map((c, i)=>{
    return(
        <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.nome}</td>
            <td>{c.idade}</td>
        </tr>
    );
})
}

    return(
        <table>
            <thead>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}