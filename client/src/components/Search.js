import React from 'react';
import Button from './Button';

const Search = () => (
    <section>
        <input />
        <div className='search-buttons'>
            <Button name='Google Search' onClick={''} style='button--gray left' />
            <Button name="I'm Feeling Lucky" onClick={''} style='button--gray right' />
        </div>
    </section>
);

export default Search;