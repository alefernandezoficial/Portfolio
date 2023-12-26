import React from "react";

import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import ContactForm from "./components/ContactForm";

function page() {
  const redesSociales = [
    {
      nombre: "Facebook",
      url: "https://www.facebook.com/Alejandro.jSk.Fernandez",
      icono: faFacebookF,
    },
    { nombre: "Twitter", url: "https://twitter.com/ale_jsk", icono: faTwitter },
    {
      nombre: "Instagram",
      url: "https://www.instagram.com/ale.jsk",
      icono: faInstagram,
    },
    {
      nombre: "GitHub",
      url: "https://github.com/alefernandezoficial",
      icono: faGithub,
    },
    {
      nombre: "LinkeIN",
      url: "https://linkedin.com/in/alefernandezoficial",
      icono: faLinkedinIn,
    },
    // Añade más redes sociales según sea necesario
  ];

  return (
    <main>
      <div className={styles.redesSocialesContainer}>
        <h2>Social Media</h2>
        <div className={styles.redesList}>
          {redesSociales.map((red) => (
            <a
              key={red.nombre}
              href={red.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.redItem}
            >
              <FontAwesomeIcon icon={red.icono} className="icon" />{" "}
              <span>{red.nombre}</span>{" "}
            </a>
          ))}
        </div>
      </div>

      <div className="container">
        <ContactForm />
      </div>
    </main>
  );
}

export default page;
