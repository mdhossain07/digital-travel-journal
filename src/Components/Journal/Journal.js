import React from 'react';
import './Journal.css';


const Journal = (props) => {
    const {title, startDate, endDate, location, description, imageUrl} = props.info;
    return (
        <section className='section--journal'>

            <div className='img-container'>
                <img className='journal-img' src = {imageUrl} alt="" />
            </div>

            <div className='detail-container'>

                <div className='location'>
                    <p>{location}</p> 
                    <span className='map'><u>View On Google Maps</u></span>
                </div>

                <h3 className='title'>{title}</h3>
                <span className='dates'> {startDate} - {endDate}</span>
                <p><small>{description}</small></p>

            </div>
        
        </section>
    );
};

export default Journal;