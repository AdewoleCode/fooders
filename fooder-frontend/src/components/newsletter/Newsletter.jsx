import React from 'react'
import classes from './Newsletter.module.css'
import { AiOutlineSend } from 'react-icons/ai'
import newsletterIllustration from '../../assets/newsletter.svg'

const Newsletter = () => {
  return (
    <section id='contacts' className={classes.container}>
      <div className={classes.wrapper}>
        <h4 className={classes.subtitle}>Get our latest offers</h4>
        <h2 className={classes.title}>Newsletter</h2>
        <div className={classes.inputContainer}>
          <input type="text" placeholder='Enter email...' />
          <AiOutlineSend className={classes.sendIcon} />
        </div>
        <div className={classes.imgbox}>
          <img src={newsletterIllustration} className={classes.illustration} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Newsletter