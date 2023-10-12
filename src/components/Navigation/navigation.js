import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss';
import Image from './Images/H.jpg';

export default class Navitagion extends React.Component{
    render(){
        return(
            <nav>
                <Link to='/'  className='links'><img src={Image} alt="logo-H"></img></Link>
                <ul>
                    <Link to='/'  className='links'><li>Home</li></Link>
                    <Link to='/article' className='links'><li>Article</li></Link>
                    <Link to='/contact'  className='links'><li>Contact</li></Link>
                </ul>


            </nav>
        );
    }
}
