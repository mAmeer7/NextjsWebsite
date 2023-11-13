import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'
import { Facebook, Instagram, Twitter, Youtube } from '../../../public'
export default function Footer() {
  return (
  
    <div className={styles.container}>
    <div>@MustafaAmeer</div>
    <div className={styles.social}>
        <Image  className={styles.icon} src={Facebook} width={20} height={20} alt='facebook'/>
        <Image className={styles.icon} src={Instagram} width={20} height={20} alt='Instagram'/>
        <Image className={styles.icon} src={Twitter} width={20} height={20} alt='Twitter'/>
        <Image className={styles.icon} src={Youtube} width={20} height={20} alt='YT'/>


    </div>
    </div>
   
  )
}
