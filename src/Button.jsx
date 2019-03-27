import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Button = (props) => {
    const ButtonStyle = {
        padding: '40px',
        margin: '10px',
        border: 'black'
    }
    const onClick = () => {
        if (props.updateButton != undefined)
            props.updateButton(props.label);
        else
            props.evaluate();
    }

    return (
        <button className="btn-primary" onClick={onClick} style={ButtonStyle} > {props.label} </button>
    );
};

export default Button; 