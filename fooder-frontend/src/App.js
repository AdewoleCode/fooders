
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from "../src/components/navbar/Navbar"
import Footer from "../src/components/footer/Footer"
import Home from "../src/components/home/Home"
import Login from "../src/components/login/Login"
import Signup from "../src/components/signup/SignUp"
import Cart from "../src/components/cart/Cart"
import FoodCatalogue from "../src/components/foods/Foods"
import FoodDetails from "../src/components/foodDetails/FoodDetails"
import Create from "../src/components/create/Create"
import Checkout from "../src/components/checkout/Checkout"
import { useSelector } from 'react-redux';



function App() {


  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/create' element={<Create />} />
          <Route path='/food/:id' element={<FoodDetails />} />
          <Route path='/foods/:id' element={<FoodCatalogue />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
