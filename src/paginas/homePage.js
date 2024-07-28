import '../styles/Home.css';

const Homepage = (props) => {
    return(
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="avion"/>
        </div>
        <div className="columnas">
            <div className="Bienvenido">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam eveniet itaque quidem pariatur, accusamus sint molestias sit reprehenderit facere officia dolor aliquam ducimus ea enim labore incidunt praesentium mollitia beatae!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem at quo, excepturi obcaecati est laudantium incidunt ratione provident laborum consequuntur numquam sit repellat, iusto quae aspernatur porro ullam officiis assumenda.</p>
            </div>

            <div className="Testimonios">
                <h2>Administradores</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente excelente</span>
                    <span className="autor">Juan Gomez - Zapatos.com</span>
                </div>
            </div>
        </div>
    </main>
    )
}


export default Homepage;