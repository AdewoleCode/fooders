import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import classes from './FoodCatalog.module.css'
import { useEffect } from 'react'
import axios from "axios"
import Spinner from '../spinner/Spinner'

const FoodCatalog = () => {
  const [filteredFoods, setFilteredFoods] = useState([])
  const location = useLocation()
  const foodEndpoint = location.pathname.split('/')[2]
  const { token } = useSelector((state) => state.auth)

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };

    const fetchFoodType = async () => {
      const res = await axios.get(`https://fooder-backend.onrender.com/api/product?category=${foodEndpoint}`, config)

      const data = await res.data
      setFilteredFoods(data)
    }
    fetchFoodType()
  }, [foodEndpoint])


  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {filteredFoods?.length !== 0 && <h2 className={classes.title}>The best {foodEndpoint} in the region</h2>}
        <div className={classes.foods}>
          {filteredFoods.length !== 0 ? filteredFoods?.map((f) => (
            <Link to={`/food/${f._id}`} key={f._id} className={classes.food}>
              <div className={classes.imgContainer}>
                <img src={f?.image} className={classes.foodImg} alt="" />
              </div>
              <div className={classes.foodDetails}>
                <h4 className={classes.foodTitle}>{f?.title}</h4>
                <span className={classes.price}><span>$</span> {f?.price}</span>
              </div>
            </Link>
          )) :
            <div className={classes.noQuantity}>
              <p>loading list of {foodEndpoint}, please wait...</p>
              <Spinner />
            </div>}
        </div>
      </div>
    </div>
  )
}

export default FoodCatalog