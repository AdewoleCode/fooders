import React from 'react'
import { useState, useEffect } from 'react'
import "./AllFood.css"
import { useSelector } from 'react-redux'
import axios from "axios"
import { Link } from 'react-router-dom'





const AllFood = () => {
    const { token } = useSelector((state) => state.auth)

    const [foodList, setFoodList] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };

        const fetchFoodList = async () => {
            const res = await axios.get(`https://fooder-backend.onrender.com/api/product`, config)
            console.log(res.data);

            const data = await res.data
            setFoodList(data)
        }
        fetchFoodList()
    }, [])


    return (
        <div className='all-food'>
            <h2>Some of our fearured dishes</h2>
            <div>
                <div>
                    <div className='food-list'>

                        {foodList.length !== 0 ? foodList?.map((f) => (
                            <>
                                <Link style={{textDecoration: "none"}} to={`/food/${f._id}`} key={f._id} className="food_item">
                                    <div className='foodList-img'>
                                        <img src={f?.image} alt="" />
                                    </div>
                                    <div className='price-listt'>
                                        <h4>{f?.title}</h4>
                                        <span ><span className='signs'>$</span> {f?.price}</span>
                                    </div>
                                </Link>
                            </>
                        )) : <h1 >loading, please wait...</h1>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllFood