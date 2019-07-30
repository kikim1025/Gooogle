import React from 'react';

const Link = (props) => (
    <a className={'link ' + props.style} href={props.link}>{props.name}</a>
);

export default Link;