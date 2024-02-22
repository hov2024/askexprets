import { NavLink } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import styles from '../../style/NavBar/NavBottom.module.css'
import logo from "../../img/logo.png"


const NavBottom = () => {
  return (
    <div className={styles.navBottom}>
       <div className='container'>
            <div className={styles["nav-box"]}>
                <img src={logo} alt='Logo' className={styles["nav-logo"]}/>
                <div className={styles['nav']}>
                    <ul className={styles["nav-item-box"]}>
                        <li>
                            <NavLink 
                                to="/"
                                style={({ isActive }) => {
                                    return isActive ? { color: '#4EAF4E'} : {}
                                }}
                            >Home</NavLink >
                        </li>
                        <li>
                            <NavLink 
                                to="/pages"
                                style={({ isActive }) => {
                                    return isActive ? { color: '#4EAF4E'} : {}
                                }}
                            >Pages</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/services"
                                style={({ isActive }) => {
                                    return isActive ? { color: '#4EAF4E'} : {}
                                }}
                            >Services</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/work"
                                style={({ isActive }) => {
                                    return isActive ? { color: '#4EAF4E'} : {}
                                }}
                            >Work</NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/contact"
                                style={({ isActive }) => {
                                    return isActive ? { color: '#4EAF4E'} : {}
                                }}
                            >Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={styles["nav-contact"]}>
                    <button className={styles["nav-tel-icon"]}><FaPhoneAlt size={15}/></button>
                    <button className={styles["nav-tel-number"]} type="submit">+ (888) 452 1505</button>
                </div>
            </div>
       </div> 
    </div>
  )
}

export default NavBottom