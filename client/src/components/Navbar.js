import React from 'react';
import Link from './Link';
import Button from './Button';

const Navbar = () => (
    <nav className='navbar'>
        <Link name='About' link='https://about.google/intl/en/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header' style='left' />
        <Link name='Store' link='https://store.google.com/?utm_source=hp_header&utm_medium=google_oo&utm_campaign=GS100042' style='left' />
        <Button name='Sign in' onClick={''} style='button--blue right' />
        <Link name='Images' link='https://www.google.com/imghp?hl=en&tab=wi&ogbl' style='right' />
        <Link name='Gmail' link='https://www.google.com/gmail/about/#' style='right' />  
    </nav>
);

export default Navbar;