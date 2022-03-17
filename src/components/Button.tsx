interface ButtonProps{
    color?: 'green' | 'blue' | 'gray'
    children?: any
    className?: string
    onClick?: () => void
}

export default function Button(props: ButtonProps){
    return (
        <button onClick={props.onClick} className={`bg-gradient-to-r from-${props.color ?? 'gray'}-400 to-${props.color ?? 'gray'}-700
        text-white  px-4 py-2 rounded-md
        ${props.className}
        `}
        >
        {props.children}
        </button>
    )
}