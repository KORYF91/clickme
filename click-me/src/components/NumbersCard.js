import React from 'react';


const NumbersCard = props => {
    return (
        <div>
            <img alt="g" src={props.image} onClick={() => props.handleClick(props.id)} style={{width: "100px", height: "100px"}}/>
            
        </div>
    );
};

export default NumbersCard;