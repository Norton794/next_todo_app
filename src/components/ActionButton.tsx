export default function ActionButton(props){
    return(
        <button onClick={props.onClick} className={`flex justify-center items-center text-${props.color}-600 rounded-full p-2 m-1 hover:bg-purple-50`}>
        {props.children}
        </button>
    )
}