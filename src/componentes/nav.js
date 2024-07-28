//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return(
        <Nav>
            <ul className="holder">
                <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined } to="/">Home</NavLink></li>

                
                <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined } to="/Nosotros">Nosotros</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined } to="/">Servicio</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? "activo" : undefined } to="/">Contacto</NavLink></li>
            </ul>
        </Nav>
    )
}

export default Nav;