import { Link } from "react-router-dom"; 

interface MenuItem {
  name: string;
  link: string;
}

interface MenuProps {
  className?: string;
  items: MenuItem[];
}
const Menu: React.FC<MenuProps> = (props) => {
    return(
        <ul className={`${props.className}`}>
        {props.items.map((item, index )=> (
            <li key={index} className={`${props.className}`}>
                <Link to={item.link}>
                    {item.name}
                </Link>
                
            </li>
        ))}
    </ul>
    )
};
export default Menu;