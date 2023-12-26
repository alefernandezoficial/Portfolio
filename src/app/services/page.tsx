import React from "react";

function page() {
  return (
    <main>
      <div className="container">
        <div className="card text-bg-dark">
          <img
            src="images/banner1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Ofrezco un servicio integral de desarrollo de aplicaciones y
              sitios web que abarca diseño gráfico, programación avanzada y
              administración experta, todo a un costo competitivo de mercado. Me
              especializa en la creación de soluciones web personalizadas que
              cumplen con los más altos estándares de calidad. Si buscas una
              aplicación web única y funcional, estoy comprometido a ofrecerte
              resultados excepcionales. Contáctame para discutir tus necesidades
              específicas y proporcionarte una cotización detallada que se
              ajuste a tu presupuesto y objetivos.
            </p>
            <div className="alert alert-info" role="alert">
              Precios accecibles en dolares USD & pesos argentinos ARG. Su
              consulta, no molesta.
            </div>
            <a className="btn btn-info" href="/contact" role="button">
              +INFO ir a Contacto
            </a>
          </div>
        </div>
      </div>

      {/* divider */}
      <br />

      <div className="container">
        <div className="card text-bg-dark">
          <img
            src="images/banner2.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              ¡Potencia tu presencia en línea con una creación de calidad! Soy
              un experto en el desarrollo web y la creación de aplicaciones,
              utilizando herramientas de vanguardia para garantizar resultados
              excepcionales. Construyo páginas web y aplicaciones usando
              tecnologías de punta como Next.js y React.js para una experiencia
              interactiva de primer nivel. Mi creatividad se destaca gracias a
              CANVA y Photoshop, logrando diseños visuales impresionantes y
              atractivos.
            </p>
            <div className="alert alert-warning" role="alert">
              Con tiempo limitado, framework tienen otro costo.
            </div>
            <a className="btn btn-info" href="/contact" role="button">
              +INFO ir a Contacto
            </a>
          </div>
        </div>
      </div>

      {/* divider */}
      <br />

      <div className="container">
        <div className="card text-bg-dark">
          <img
            src="images/banner3.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">
              Además, mi dominio de VisualBasic Studio y mi habilidad para
              trabajar con códigos en HTML, CSS y JavaScript me permiten
              construir proyectos sólidos y funcionales. La implementación de
              Bootstrap garantiza un diseño adaptable y moderno. No solo eso,
              también integro bases de datos robustas como SupaBase en MySql
              para asegurar la eficiencia y seguridad en tus aplicaciones.
              Confía en mí para crear tu próximo proyecto web. ¡Haz que tu
              presencia en línea destaque con profesionalismo y calidad!
            </p>
            <div className="alert alert-danger" role="alert">
              La creacion con base de datos tienen otro costo.
            </div>
            <a className="btn btn-info" href="/contact" role="button">
              +INFO ir a Contacto
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr />
      <br />
    </main>
  );
}

export default page;
