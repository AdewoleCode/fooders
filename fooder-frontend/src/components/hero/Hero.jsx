import React from 'react'
import classes from './Hero.module.css'
import { AiOutlineArrowDown } from 'react-icons/ai'
import manEating from '../../assets/eating-home.svg'

const Hero = () => {
    return (
        <section style={{ height: '200vh' }} id="home" className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                {/* <p className={classes.second}>Get <span>delicious</span> , <span>sizzling hot</span> food!!!</p> */}
                    <h2 className={classes.first}>Whatever your cravings are <span>we got you!</span> </h2>
                    <p className={classes.second}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
                        temporibus modi. Corrupti doloremque et ipsum magni ex eos, necessitatibus obcaecati
                        repelnis </p>
                    <div className={classes.buttons}>
                        <button className={classes.buttonOrder}>Order now!</button>
                        <button className={classes.buttonSee}><a href="#foods">See what's available <AiOutlineArrowDown /> </a></button>
                    </div>
                </div>
                <div className={classes.right}>
                    <img src={manEating} alt="" className={classes.manEatingImg} />
                </div>
            </div>
        </section>
    )
}

export default Hero