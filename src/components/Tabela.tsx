import Cliente from "../core/Cliente"
import { IconeEdit, IconeTrash} from "./Icons";
import ActionButton from './ActionButton'
interface TabelaProps{
    clientes: Cliente[]
}


export default function Tabela(props: TabelaProps){

function renderizarCabecalho(){
    return(
            <tr>
                <th className="text-left p-4">Codigo</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                <th className="p-4">Ações</th>
            </tr>
    );
}


function renderizarAcoes(){
    return(
        <td className={`flex justify-center`}>
            
                <ActionButton color="green">{IconeEdit}</ActionButton>
                <ActionButton color="red">{IconeTrash}</ActionButton>
           
        </td>
    )
}

function renderizarDados(){
return props.clientes?.map((c, i)=>{
    return(
        <tr key={c.id}
        className={`${i % 2 === 0 ? 'bg-purple-200': 'bg-purple-50'}`}>
            <td className="text-left p-4">{c.id}</td>
            <td className="text-left p-4">{c.nome}</td>
            <td className="text-left p-4">{c.idade}</td>
            {renderizarAcoes()}
        </tr>
    );
})
}



    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to-purple-800
            `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}