
interface Props {
    children?: React.ReactNode;
    className?: string;


}

const Box: React.FC<Props> = (props) => {
    return (
        <div className={`${props.className}`}>
            {props.children}
        </div>
    )
}
export default Box