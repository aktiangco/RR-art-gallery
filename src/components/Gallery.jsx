import React from 'react';


const Gallery = (props) => {
    return (
        <div style={{'width': '100%'}}>
            <img className="img" src={props.objectImg} alt={props.title} />
            <p>{props.artist}</p>
        </div>       
    )
}

export default Gallery