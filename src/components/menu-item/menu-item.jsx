import React from 'react';
import './menu-item.scss';

const MenuItem = ({ title, imageUrl, id, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
            }}>


            </div>
            <div className='content'>
                <h1 className='title'>{ title.toUpperCase() }</h1>
                <span className='subtitle'>EXPLORAR</span>
            </div>
        </div>
    )
}

export default MenuItem;