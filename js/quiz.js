
document.getElementById("form-usuario").addEventListener("submit", manejadorFormularioUsuario);

function manejadorFormularioUsuario(e){
    e.preventDefault();

    let nombre = document.getElementById("nombreUsuario").value;
    let apellido = document.getElementById("apellidoUsuario").value;
    let email = document.getElementById("emailUsuario").value;

    let datosDeUsuario = document.getElementById("datosDeUsuario");
    let datosUsuario = JSON.parse(localStorage.getItem(nombre, apellido, email));


    if(datosUsuario == null){
        datosDeUsuario.innerHTML = `<h2>No ingresaste los datos correspondientes</h2>`;
    } else{
        mostrarQuiz();
    }

    console.log(datosUsuario);
}

function mostrarQuiz(){
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = `
    <legend>INICIO DEL QUIZ MARVEL</legend>

            <p>1. ¿En qué año se estrenó la primera película de Iron Man, que lanzó el Marvel Cinematic Universe?</p>
            <input type="radio" name="respuesta" id="respuesta1" value="2008" />2008<br />
            <input type="radio" name="respuesta" id="respuesta2" value="2005" />2005<br />
            <input type="radio" name="respuesta" id="respuesta3" value="2010" />2010<br />

            <p>2. ¿Cómo se llama el martillo de Thor?</p>
            <input type="radio" name="respuesta" id="respuesta1" value="Vanir" />Vanir<br />
            <input type="radio" name="respuesta" id="respuesta2" value="Mjolnir" />Mjolnir<br />
            <input type="radio" name="respuesta" id="respuesta3" value="Aesir" />Aesir<br />

            <p>3. En The Incredible Hulk, ¿qué le dice Tony a Thaddeus Ross al final de la película?</p>
            <input type="radio" name="respuesta" id="respuesta1" value="Que él sabe sobre SHIELD" />Que él sabe sobre SHIELD<br />
            <input type="radio" name="respuesta" id="respuesta2" value="Que están formando un equipo" />Que están formando un equipo<br />
            <input type="radio" name="respuesta" id="respuesta3" value="Que Thaddeus le debe dinero" />Que Thaddeus le debe dinero<br />

            <p>4. ¿De qué está hecho el escudo del Capitán América?</p>
            <input type="radio" name="respuesta" id="respuesta1" value="Adamantium" />Adamantium<br />
            <input type="radio" name="respuesta" id="respuesta2" value="Vibranio" />Vibranio<br />
            <input type="radio" name="respuesta" id="respuesta3" value="Carbonadio" />Carbonadio<br />

            <p>5. Los Flerkens son una raza de alienígenas extremadamente peligrosos que se parece a qué.</p>
            <input type="radio" name="respuesta" id="respuesta1" value="Gatos" />Gatos<br />
            <input type="radio" name="respuesta" id="respuesta2" value="Patos" />Patos<br />
            <input type="radio" name="respuesta" id="respuesta3" value="Mapaches" />Mapaches<br />

            <p>6. Antes de convertirse en Visión, ¿cómo se llama el mayordomo de inteligencia artificial de Iron Man?</p>
            <input type="radio" name="respuesta" id="respuesta1" value="Alfred" />Alfred<br />
            <input type="radio" name="respuesta" id="respuesta2" value="Jarvis" />Jarvis<br />
            <input type="radio" name="respuesta" id="respuesta3" value="Marvin" />Marvin<br />

            <p>7. ¿Cuál es el verdadero nombre de la Pantera Negra?</p>
            <input type="radio" name="respuesta" id="respuesta1" value="T'Challa" />T'Challa<br />
            <input type="radio" name="respuesta" id="respuesta2" value="M'Baku" />M'Baku<br />
            <input type="radio" name="respuesta" id="respuesta3" value="N'Jobu" />N'Jobu<br />

            <p>8. ¿Cuál es la raza alienígena que Loki envía para invadir la Tierra en The Avengers?</p>
            <input type="radio" name="respuesta" id="respuesta1" value="Los skrulls" />Los skrulls<br />
            <input type="radio" name="respuesta" id="respuesta2" value="Los flerkens" />Los flerkens<br />
            <input type="radio" name="respuesta" id="respuesta3" value="El chitauri" />El chitauri<br />

            <p>9. ¿Quién fue el último titular de la Piedra espacial antes de que Thanos lo reclame por su Infinity Gauntlet?</p>
            <input type="radio" name="respuesta" id="respuesta1" value="Thor" />Thor<br />
            <input type="radio" name="respuesta" id="respuesta2" value="Loki" />Loki<br />
            <input type="radio" name="respuesta" id="respuesta3" value="Tony Stark" />Tony Stark<br />

            <p>10. ¿Qué nombre falso usa Natasha cuando conoce a Tony por primera vez?</p>
            <input type="radio" name="respuesta" id="respuesta1" value="Natalie Rushman" />Natalie Rushman<br />
            <input type="radio" name="respuesta" id="respuesta2" value="Natalia Romanoff" />Natalia Romanoff<br />
            <input type="radio" name="respuesta" id="respuesta3" value="Nicole Rohan" />Nicole Rohan<br />

            <input type="submit" name="button" id="form-enviar">
    `;
}