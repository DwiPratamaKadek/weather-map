
interface Props { 
    className? : string ;
    children : string ;
    onClick? : () => void
}
const Button: React.FC<Props> = (props) => {
    return(
        <button className={`${props.className}`} onClick={props.onClick}> 
            {props.children}
        </button>
    )
}
export default Button