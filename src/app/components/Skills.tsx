import Card from "./Cards";

export default function Home() {
    const tarjeta = {
        title: "HTML",
        imageUrl: "images/html.jpg", // Ruta a tu imagen
        description: "HyperText Markup Language ",
    };

    const tarjeta1 = {
        title: "CSS",
        imageUrl: "images/css.jpg", // Ruta a tu imagen
        description: "Cascading Style Sheets",
    };

    const tarjeta2 = {
        title: "JavaScript",
        imageUrl: "images/javascript.jpg", // Ruta a tu imagen
        description: "Lenguaje de programacion",
    };

    const tarjeta3 = {
        title: "Wordpress",
        imageUrl: "images/wordpress.jpg", // Ruta a tu imagen
        description: "Creacion de sitios web",
    };

    const tarjeta4 = {
        title: "Photoshop",
        imageUrl: "images/ps.jpg", // Ruta a tu imagen
        description: "Edicion y creacion de fotos",
    };

    const tarjeta5 = {
        title: "CANVA",
        imageUrl: "images/canva.jpg", // Ruta a tu imagen
        description: "Diseño de contenidos",
    };

    const tarjeta6 = {
        title: "Reaper DAW",
        imageUrl: "images/reaper.jpg", // Ruta a tu imagen
        description: "Produccion Audiovisual",
    };

    const tarjeta7 = {
        title: "Sony Vegas",
        imageUrl: "images/vegas.jpg", // Ruta a tu imagen
        description: "Produccion Visual",
    };

    const tarjeta8 = {
        title: "NextJS & ReactJS",
        imageUrl: "images/nextjs.jpg", // Ruta a tu imagen
        description: "Framework Libreria",
    };

    const tarjeta9 = {
        title: "Bootstrap",
        imageUrl: "images/bootstrap.jpg", // Ruta a tu imagen
        description: "Framework Libreria",
    };
    const tarjeta10 = {
        title: "Microsoft Word & Excel",
        imageUrl: "images/microsoft.jpg", // Ruta a tu imagen
        description: "Paquete de programas office",
    };
    const tarjeta11 = {
        title: "GitHub",
        imageUrl: "images/github.jpg", // Ruta a tu imagen
        description: "Control de versiones",
    };

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Card
                            title={tarjeta.title}
                            imageUrl={tarjeta.imageUrl}
                            description={tarjeta.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta1.title}
                            imageUrl={tarjeta1.imageUrl}
                            description={tarjeta1.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta2.title}
                            imageUrl={tarjeta2.imageUrl}
                            description={tarjeta2.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta3.title}
                            imageUrl={tarjeta3.imageUrl}
                            description={tarjeta3.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta4.title}
                            imageUrl={tarjeta4.imageUrl}
                            description={tarjeta4.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta5.title}
                            imageUrl={tarjeta5.imageUrl}
                            description={tarjeta5.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta6.title}
                            imageUrl={tarjeta6.imageUrl}
                            description={tarjeta6.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta7.title}
                            imageUrl={tarjeta7.imageUrl}
                            description={tarjeta7.description}
                        />
                    </div>

                    <div className="col-md-4">
                        <Card
                            title={tarjeta8.title}
                            imageUrl={tarjeta8.imageUrl}
                            description={tarjeta8.description}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title={tarjeta9.title}
                            imageUrl={tarjeta9.imageUrl}
                            description={tarjeta9.description}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title={tarjeta10.title}
                            imageUrl={tarjeta10.imageUrl}
                            description={tarjeta10.description}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title={tarjeta11.title}
                            imageUrl={tarjeta11.imageUrl}
                            description={tarjeta11.description}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
