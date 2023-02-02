import React, {useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import classes from './Navbar.module.css'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { products } = useSelector((state) => state.cart)
  const { user } = useSelector(state => state.auth)
  const { isAdmin } = useSelector(state => state.auth)
  const menuRef = useRef(null)

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

  const menuToggle = () => menuRef.current.classList.add('list')

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`} onClick={menuToggle}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/' className={classes.title}>
            FOODER
          </Link>
        </div>
        <div className={classes.center} >
          <ul className={classes.list} ref={menuRef}>
            <li className={classes.listItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/contacts">About</Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/foods">Dishes</Link>
            </li>
            {
              isAdmin ? (
                <li className={classes.listItem}>
                  <Link to='/create'>Create</Link>
                </li>

              ) : null
            }

          </ul>
        </div>
        <div className={classes.right}>
          <AiOutlineUser className={classes.userIcon} />
          <Link to='/cart' className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <div className={classes.cartQuantity}>{products.length}</div>
          </Link>
          {
            user ? (
              <button onClick={handleLogout} className={classes.logout}>Logout</button>

            ) : (
              <button onClick={handleLogout} className={classes.logout}><Link to="/login" style={{ textDecoration: "none" }}>Login</Link></button>

            )
          }
        </div>
        <div className={classes.four} onClick={menuToggle}>
          <HiMenu />
        </div>
      </div>
    </div>
  )
}

export default Navbar