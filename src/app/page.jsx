"use client"
import { useRouter } from "next/navigation"
import Button from "@/components/button/Button"
import Image from "next/image"
import { Hero } from "../../public"
import styles from './page.module.css'
import Link from "next/link"
export default function Home() {
  const router= useRouter()

function clickHandle(){
router.push('/login')
}

  return (
    <main className={styles.container}   >
     



   
      <div className={styles.item}>
        <h1 className={styles.title}>
        Where Creativity Meets Functionality.
        </h1>
        <p className={styles.desc}>
          Delivering success with every solution regarding the online applications. Empower your web identity with us.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
        <Image  src={Hero} alt="" className={styles.img} />
      </div>
  
    
      
    </main>
  )
}
