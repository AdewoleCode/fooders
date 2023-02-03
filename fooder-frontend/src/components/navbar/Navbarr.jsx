import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import classes from './Navbar.module.css'
import "./navbar.css"
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { AiFillCloseCircle } from "react-icons/ai"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice'


const Navbarr = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const { products } = useSelector((state) => state.cart)
    const { user } = useSelector(state => state.auth)
    const { isAdmin } = useSelector(state => state.auth)
    const [clicked, setClicked] = useState(true)
    // const menuRef = useRef(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)

    }


    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }
    return (
        // <div className={`${classes.container} ${isScrolled && classes.scrolled}`} onClick={menuToggle}>

        <div className={`nav_container ${isScrolled && `nav_scrolled`}`}>
            <div className="nav_wrapper">
                <div className="nav_left">
                    <Link to='/' className="nav_title">
                        FOODER
                    </Link>
                </div>
                <div className="nav_center" >
                    <ul className="nav_list">
                        <li className="nav_listItem">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav_listItem">
                            <Link to="/contacts">About</Link>
                        </li>
                        <li className="nav_listItem">
                            <Link to="/foods">Dishes</Link>
                        </li>
                        {
                            isAdmin ? (
                                <li className="nav_listItem">
                                    <Link to='/create'>Create</Link>
                                </li>

                            ) : null
                        }

                    </ul>
                </div>
                <div className="nav_right">
                    <AiOutlineUser className="nav_userIcon" />
                    <Link to='/cart' className="nav_cartContainer">
                        <AiOutlineShoppingCart className="nav_cartIcon" />
                        <div className="nav_cartQuantity">{products.length}</div>
                    </Link>
                    {
                        user ? (
                            <button onClick={handleLogout} className="nav_logout">Logout</button>

                        ) : (
                            <button onClick={handleLogout} className="nav_logout"><Link to="/login" style={{ textDecoration: "none" }}>Login</Link></button>

                        )
                    }
                </div>
                <div className="nav_four">
            
                         <HiMenu  /> 
                         <AiFillCloseCircle />
            
                </div>

            </div>

        </div>
    )
}

export default Navbarr