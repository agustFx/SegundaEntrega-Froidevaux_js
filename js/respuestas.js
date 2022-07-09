class Quiz{
    constructor(pregunta, respuesta, opcion1, opcion2, opcion3){
        this.pregunta = pregunta;
        this.respuesta = respuesta;
        this.opcion1 = opcion1;
        this.opcion2 = opcion2;
        this.opcion3 = opcion3;
    }
}

const quizs = [
    new Quiz("1. ¿En qué año se estrenó la primera película de Iron Man, que lanzó el Marvel Cinematic Universe?", "2008", "1005", "2008", "2010"),
    new Quiz("2. ¿Cómo se llama el martillo de Thor?", "Mjolnir", "Vanir", "Mjolnir", "Aesir"), 
    new Quiz("3. En The Incredible Hulk, ¿qué le dice Tony a Thaddeus Ross al final de la película?", "Que están formando un equipo", "Que Thaddeus le debe dinero", "Que él sabe sobre SHIELD", "Que están formando un equipo"), 
    new Quiz("4. ¿De qué está hecho el escudo del Capitán América?", "Vibranio", "Carbonadio", "Adamantium", "Vibranio"), 
    new Quiz("5. Los Flerkens son una raza de alienígenas extremadamente peligrosos que se parece a qué.", "Gatos", "Gatos", "Mapaches", "Reptiles"), 
    new Quiz("6. Antes de convertirse en Visión, ¿cómo se llama el mayordomo de inteligencia artificial de Iron Man?", "Jarvis", "Travis", "Jarvis", "Marvis"), 
    new Quiz("7. ¿Cuál es el verdadero nombre de la Pantera Negra?", "T'Challa", "N'Jadaka", "T'Challa", "M'Baku"), 
    new Quiz("8. ¿Cuál es la raza alienígena que Loki envía para invadir la Tierra en The Avengers?", "El chitauri", "Los skrulls", "Los flerkens", "El chitauri"), 
    new Quiz("9. ¿Quién fue el último titular de la Piedra espacial antes de que Thanos lo reclame por su Infinity Gauntlet?", "Loki", "Thor", "Loki", "Tony Stark"), 
    new Quiz("10. ¿Qué nombre falso usa Natasha cuando conoce a Tony por primera vez?", "Natalie Rushman", "Natalie Rushman", "Natalia Romanoff", "Nicole Rohan")
];

function mostrarSiguientePregunta(){
    const form = document.getElementById("form-quiz");
    const button = document.createElement("button");
    button.innerHTML = `
    <label><input type="submit" value="Continuar" />
    `;

    form.appendChild(button)
}


function mostrarForm(){
    const form = document.getElementById("form-quiz");
    form.classList.add("form-quiz");
    
    
    quizs.forEach(Quiz =>{
        form.innerHTML = `
        <legend>QUIZ MARVEL STUDIOS</legend>
        <p>${Quiz.pregunta}</p>
        <label><input type="radio" name="respuesta" id="respuesta1" value="${Quiz.opcion1}" required/>${Quiz.opcion1}<br /></label>
        <label><input type="radio" name="respuesta" id="respuesta2" value="${Quiz.opcion2}" />${Quiz.opcion2}<br /></label>
        <label><input type="radio" name="respuesta" id="respuesta3" value="${Quiz.opcion3}" />${Quiz.opcion3}<br /></label>
        `;
    })

    mostrarSiguientePregunta();

    if(respuesta.cheked){
        quizs.forEach(Quiz =>{
            form.innerHTML = `
            <legend>QUIZ MARVEL STUDIOS</legend>
            <p>${Quiz.pregunta}</p>
            <label><input type="radio" name="respuesta" id="respuesta1" value="${Quiz.opcion1}" required/>${Quiz.opcion1}<br /></label>
            <label><input type="radio" name="respuesta" id="respuesta2" value="${Quiz.opcion2}" />${Quiz.opcion2}<br /></label>
            <label><input type="radio" name="respuesta" id="respuesta3" value="${Quiz.opcion3}" />${Quiz.opcion3}<br /></label>
            `;
        })
    }

}

mostrarForm();