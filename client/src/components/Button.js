import React from 'react';

const Button = (props) => (
    <div className={'button ' + props.style} onClick={props.onClick}>
        {props.name}
    </div>
);

export default Button;