import React from "react";
import Link from "next/link";
import { links } from "./linksData";
import styles from './style.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href={"/"}>Mustafa.</Link>
      <div className={styles.links}>
        {links.map((element) => (
          <Link className={styles.linkEach} key={element.id} href={`${element.url}`}>
            {element.title}
          </Link>
        ))}
       
      </div>

    </div>
  );
}
