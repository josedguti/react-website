import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Our Trip to PR!</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                        src='images/joma1.jpeg'
                        text='Chulita very happy with her new fancy ring'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src='images/joma2.jpeg'
                        text='Getting ready to go out for a romantic dinner'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards_items">
                        <CardItem 
                        src='images/joma3.jpeg'
                        text='Enjoying the sun in PR and drinking lots of Piña Coladas'
                        label='Mystery'
                        path='/services'
                        />
                        <CardItem 
                        src='images/joma4.jpeg'
                        text='Taking a nice picture in one of the coolest restaurants in PR'
                        label='Adventure'
                        path='/products'
                        />
                        <CardItem 
                        src='images/joma5.jpeg'
                        text='Going in a little adventure walking thru the Yunke jungle'
                        label='Adrenaline'
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
