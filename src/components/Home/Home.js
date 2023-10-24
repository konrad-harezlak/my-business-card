import React from 'react';
import Image from '../imageBg/background.jpg'
import './Home.scss'

export default class Home extends React.Component {

    render() {
        return (
            <main>
                <div className='image-container'>
                    <img src={Image} alt="zdjecie" />
                </div>
                <div className='description-container'>
                    <header>
                        <h1>Konrad Harężlak</h1>
                    </header>
                    <article>
                        <p>Jestem Frontend Developerem z ukończonymi kursami z zakresu Git-a i Web Developmentu. Posiadam umiejętności w językach takich jak HTML, CSS, SCSS, JavaScript, React.js oraz Bootstrap. Obecnie kontynuuję studia, aby dalej rozwijać swoje kompetencje.</p>

                        <p>Moje projekty są dostępne na moim profilu GitHub, gdzie możecie zobaczyć moje dotychczasowe osiągnięcia i postępy w kodowaniu. Jestem zmotywowany do nauki i poszukiwania nowych wyzwań w dziedzinie Frontend Developmentu.</p>

                        <p>Szukam okazji do pracy jako Frontend Developer, aby wykorzystać swoje umiejętności i kreatywność, tworząc estetyczne i funkcjonalne interfejsy użytkownika. Chciałbym dołączyć do Waszego zespołu i wspólnie tworzyć innowacyjne projekty online.</p>
                    </article>
                </div>
            </main>
        )
    }
}