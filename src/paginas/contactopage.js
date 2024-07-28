import '../styles/contacto.css';

const contactopage = (props) => {
    return(
        <main className="holder contacto">
        <div>
            <h2>Completa el formulario</h2>
            <form action="" className="formulario">
                <p>
                    <label for="">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Telefono</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Comentarios</label>
                    <textarea name=""></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>

            </form>
        </div>
        <div className="datos">
            <h2>Otras vias de comunicacion</h2>
            <p>Tambien pueden contactarse a traves de estos medios</p>
            <ul>
              <li>Telefono: 532534</li>
              <li><a href=""> <i class="fa-brands fa-facebook"></i> </a> info fb</li>
              <li><i class="fa-brands fa-instagram"></i>info ig</li>
              <li>red social 3</li>
              <li>red social 4</li>
              <li>red social 5</li>
              <li>Mail: transpote@gmail.com</li>
            </ul>
            <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218018.23978673416!2d-64.24560118134266!3d-31.371808723297747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432984e4a4e320b%3A0x3685f037501009e4!2sJuan%20Gilberto%20de%20Soria%20Medrano%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1716212979845!5m2!1ses-419!2sar" ></iframe>
            </div>
        </div>
        
    </main>
    )
}


export default contactopage;