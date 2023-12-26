
// Cards.module.css
/* Agrega tus estilos CSS según sea necesario */

// Card.tsx
'use client'
import React, { useState } from 'react';
import styles from "./Cards.module.css";

interface CardProps {
  title: string;
  imageUrl: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setShowImage(true)}
      onMouseLeave={() => setShowImage(false)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.imagecontainer}>
        {showImage && <img src={imageUrl} alt={title} />}
      </div>
    </div>
  );
};

export default Card;
