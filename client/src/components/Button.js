import React from 'react';

const Button = (props) => (
    <button className={'button ' + props.style} onClick={props.onClick}>
        {props.name}
    </button>
);

export default Button;