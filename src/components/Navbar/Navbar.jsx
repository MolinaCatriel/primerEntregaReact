import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"

const NavBar = () => {
    return (
        <div className={styles.containerNavbar}>
            <img src="https://res.cloudinary.com/dyturjhhz/image/upload/v1680566333/Logo2_bzpnku.jpg" alt="Logo de la empresa" />
            <ul style={{display: "flex", gap: "30px"}}>
                <li>Todos</li>
                <li>Shampoos</li>
                <li>Interior</li>
                <li>Exterior</li>
                <li>Contacto</li>
            </ul>
            <CartWidget/>
        </div>
    )

}

export default NavBar