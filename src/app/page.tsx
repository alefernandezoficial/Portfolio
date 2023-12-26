import React from "react";
import Skills from "./components/Skills";

function page() {
  return (
    <main>
      <div className="container">
        <code>
          <p>
            Hola Mundo
          </p>
        </code>
      </div>

      <Skills />

      <div className="container">
        <code>
          <p>Hola Mundo</p>
        </code>
      </div>
    </main>
  );
}

export default page;
