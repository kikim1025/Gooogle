import React from 'react';
import Button from './Button';

class Search extends React.Component {
    
    state = {
        input: ''
    };

    getInput = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <section className='search'>
            <input className='search__input' name='input' onChange={this.getInput} />
            <div className='search__buttons'>
                <Button name='Google Search' onClick={''} style='button--gray left' />
                <Button name="I'm Feeling Lucky" onClick={''} style='button--gray right' />
            </div>
            </section>
        );
    };
};

export default Search;