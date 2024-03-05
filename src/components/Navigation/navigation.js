import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss';
import Image from './image/h.jpg';

const Navigation = ()=>{
        return(
            <nav>
                <Link to='/'  className='links'><img src={Image} alt="logo-H"></img></Link>
                <ul>
                    <Link to='/'  className='links'><li className="navigation-link">Home</li></Link>
                    <Link to='/article' className='links'><li className="navigation-link">Article</li></Link>
                    <Link to='/projects' className='links'><li className="navigation-link">Projects</li></Link>
                    <Link to='/contact'  className='links'><li className="navigation-link">Contact</li></Link>
                </ul>


            </nav>
        );
}
export default Navigation;
