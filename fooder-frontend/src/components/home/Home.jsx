import React from 'react'
import Hero from '../hero/Hero'
import classes from './Home.module.css'
import illustration1 from '../../assets/deli5.svg'
import illustration2 from '../../assets/deli2.svg'
import illustration3 from '../../assets/deli3.svg'
import Foods from '../foods/Foods'
import Newsletter from '../newsletter/Newsletter'

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>Delivery</span>
            <h2 className={classes.deliveryTitle}>Always on time for you</h2>
          </div>
          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <div className={classes.imgbox}>
              <img src={illustration2} alt="" />


              </div>
              <h3>lightening fast delivery</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <div className={classes.imgbox}>
              <img src={illustration1} alt="" />

              </div>
              <h3>payment on delivery</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <div className={classes.imgbox}>
                <img src={illustration3} alt=""/>

              </div>
              <h3>fast and affordable</h3>
            </div>
          </div>
        </div>
        <Foods />
        <Newsletter />
      </div>
    </div>
  )
}

export default Home