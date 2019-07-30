import React from 'react';
import Button from './Button';

const Search = () => (
    <section className='search'>
        <input className='search__input' />
        <div className='search__buttons'>
            <Button name='Google Search' onClick={''} style='button--gray left' />
            <Button name="I'm Feeling Lucky" onClick={''} style='button--gray right' />
        </div>
    </section>
);

export default Search;