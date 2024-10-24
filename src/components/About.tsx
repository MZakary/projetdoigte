import { useEffect } from "react";

function About(){

    useEffect(() => {
        document.title = `À propos - Typer`;
    }, []);

    return(
        <section className="AboutPage">
            <h1>À propos du Défi Clavier de Zakary.</h1>
            <p>Le Défi Clavier de Zakary est une application web conçue pour aider les personnes malvoyantes et non-voyantes à apprendre à utiliser un clavier QWERTY à travers des niveaux dynamiques et amusants.</p>
            <p>Développeur: Zakary Mitrovic</p>
            <p>Soumettre des commentaires/problèmes: zakary.mitrovic.cisssmc16@ssss.gouv.qc.ca</p>
            <p>Version 1.0</p>
        </section>
    )
}
export default About;