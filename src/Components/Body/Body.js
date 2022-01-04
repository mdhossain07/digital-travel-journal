import React from 'react';
import './Body.css';
import travelData from '../../travelData';
import Journal from '../Journal/Journal'

const Body = () => {

    return (
        <div className='body'>
            {
                travelData.map(travel => 
                <Journal key = {travel.key} 
                info = {travel}/>)
            }
        </div>
    );
};

export default Body;