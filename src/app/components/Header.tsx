import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
  return (
    <main>
      {" "}
      <div className={styles.header}>
        <Image
          src="/images/alejandro-fernandez.png"
          alt="Alejandro Fernandez Header"
          width={500}
          height={150}
        />
      </div>
      {/* Descripcion Slogan */}
      <div className={styles.header}>
        <code>Diseñador, Desarrollador & Programador Web</code>
      </div>
    </main>
  );
}

export default Header;
