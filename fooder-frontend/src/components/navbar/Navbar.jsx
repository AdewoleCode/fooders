import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/authSlice'




import "../navbar/Navbarr.css"

function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.cart)
  const { isAdmin } = useSelector(state => state.auth)
    const { user } = useSelector(state => state.auth)





  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }


  return (
    <div className="nav_container">

      <header>
        <h3>
          <Link to='/' className="nav_title">
            FOODER
          </Link>

        </h3>
        <nav ref={navRef}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {
            isAdmin ? (
              <li className="nav_listItem">
                <Link to='/create'>Create</Link>
              </li>

            ) : null
          }
          <Link to='/foods'>dishes</Link>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <div className="icon">
          {/* <AiOutlineUser className="nav_userIcon" /> */}
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
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>


      </header>
    </div>

  );
}

export default Navbar;