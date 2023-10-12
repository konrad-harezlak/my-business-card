import React from 'react';
import './Contact.scss'
import Image from './Images/background.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faHouse, faGlobe } from '@fortawesome/free-solid-svg-icons';


export default class Contact extends React.Component {
    render() {
        return (
            <div className='contact-container'>
                 <div className='image-container'>
                    <img src={Image} alt="zdjecie" />
                </div>
                
                <div className='bussines-card'>
                    <h1>Konrad Harężlak</h1>
                    <div className='card-number-left-top'><p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+48791019796">+48 791 019 796</a></p></div>
                    <div className='card-adres-right-top'><p><FontAwesomeIcon icon={faHouse} /> <a href="https://www.google.com/maps/search/?q=Katowice+Kalinowa+39" target="_blank" rel="noopener noreferrer">Katowice Kalinowa 39</a></p></div>
                    <div className='card-email-left-bottom'><p><FontAwesomeIcon icon={faEnvelope} />  <a href="mailto:konrad.harezlakk@gmail.com" target="_blank">konrad.harezlakk@gmail.com</a></p></div>
                    <div className='card-page-right-bottomn'><p><FontAwesomeIcon icon={faGlobe} />  <a href="https://github.com/konrad-harezlak/" target="_blank" rel="noopener noreferrer">github.pl/konrad-harezlak</a></p></div>
                </div>
            </div>
        )
    }
}