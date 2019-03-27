import React from 'react';
import Button from './Button'; 

const ButtonHolder = (props) => {
    
    const updateButton = (buttonLabel) => 
    {
        console.log(buttonLabel);
        props.updateButtonsPressed(buttonLabel); 
    }
    
    return (
        <div>
            <p>
            <Button label="1" updateButton={updateButton} />
            <Button label="2" updateButton={updateButton} />
            <Button label="3" updateButton={updateButton} />
            </p>
            <p>
            <Button label="4" updateButton={updateButton} />
            <Button label="5" updateButton={updateButton} />
            <Button label="6" updateButton={updateButton} />
            </p>
            <p>
            <Button label="7" updateButton={updateButton} />
            <Button label="8" updateButton={updateButton} />
            <Button label="9" updateButton={updateButton} />
            </p>
        </div>
    );
};

export default ButtonHolder; 