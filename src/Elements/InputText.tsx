
interface Props {   
    className? : string ;
    placeholder? : string ;
}

const InputText: React.FC<Props> = (props) => {
    return (
        <input type="text" className={`${props.className}`} placeholder={`${props.placeholder}`} /> 
    )
}
export default InputText