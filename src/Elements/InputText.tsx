
interface Props {   
    className? : string ;
    placeholder? : string ;
    value? : string ;
    onChange? : (event : React.ChangeEvent<HTMLInputElement>) => void;  
}

const InputText: React.FC<Props> = (props) => {
    return (
        <input type="text" className={`${props.className}`} placeholder={`${props.placeholder}`} value={props.value} onChange={props.onChange } /> 
    )
}
export default InputText