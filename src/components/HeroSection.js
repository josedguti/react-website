import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/* <video src='../videos/video-2.mp4' autoPlay loop muted /> */}
            <h1>Votre entraînement running sans blessure</h1>
            
            <div className='hero-btns'>
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Primary
                </Button>
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    Secondary
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
