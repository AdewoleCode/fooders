import React from 'react'
import { foodTypes } from '../../data/Data'
import {Link} from 'react-router-dom'
import classes from './Foods.module.css'

const Foods = () => {
  return (
    <section id="foods" className={classes.container}>
      <div className={classes.wrapper}>
        <h5 className={classes.subtitle}>Some of our featured Dishes</h5>
        <h2 className={classes.title}>Best meals in the city</h2>
        <div className={classes.foods}>
          {foodTypes.map((foodType) => (
            <Link to={`/foods/${foodType.name}`} key={foodType.id} className={classes.food}>
              <h4>{foodType.name}</h4>
              <div className={classes.imgContainer}>
                <img src={foodType.img} alt="img-dishes"/>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Foods