import React from 'react';
import Link from './Link';

const Footer = () => (
    <footer>
        <div className='footer-container'>
            <Link name='Advertising' link='https://ads.google.com/intl/en_us/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1' style='left' />
            <Link name='Business' link='https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none' style='left' />
            <Link name='How Search Works' link='https://www.google.com/search/howsearchworks/?fg=1' style='left' />
            <Link name='Setings' link='https://www.google.com/preferences?hl=en' style='right' />
            <Link name='Terms' link='https://policies.google.com/terms?hl=en&gl=us' style='right' />
            <Link name='Privacy' link='https://policies.google.com/privacy?hl=en&gl=us' style='right' />
        </div>
    </footer>
);

export default Footer;