// ContactForm.js
'use client'

import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [instagram, setInstagram] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Verificar si los campos obligatorios están en blanco
    if (!name || !email || !message || !linkedin || !instagram) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    // Crear un objeto con los datos del formulario
    const formData = {
      name,
      email,
      message,
      linkedin,
      instagram,
      phone,
    };

    // Enviar el formulario usando emailjs
    emailjs
      .sendForm(
        "service_ox7aili",
        "template_sbu6hcw",
        event.target,
        "rjcSU1aj5GcjvyJkL",
        formData
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("¡Mensaje enviado correctamente!");
        },
        (error) => {
          console.log(error.text);
          alert("Se ha producido un error al enviar el mensaje");
        }
      );
  };

  return (
    <div className={styles.containerContact}>
      <h1 className={styles.contacttitle}>Contacto</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="name" className={styles.label}>
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            className={styles.inputField}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            className={styles.inputField}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message" className={styles.label}>
            Mensaje:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            className={styles.inputField}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="linkedin" className={styles.label}>
            Usuario de LinkedIn:
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={linkedin}
            className={styles.inputField}
            onChange={(event) => setLinkedin(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="instagram" className={styles.label}>
            Usuario de Instagram:
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={instagram}
            className={styles.inputField}
            onChange={(event) => setInstagram(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone" className={styles.label}>
            Teléfono:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            className={styles.inputField}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
