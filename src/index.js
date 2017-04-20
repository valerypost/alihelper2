import React from 'react';

import SearchBox from './components/SearchBox';

// import { render } from 'react-dom';
//import App from './components/App';

import ReactDOM from 'react-dom';


// ReactDOM.render(<App name='World' />, document.getElementById('root'));

// Render your table
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};



ReactDOM.render(
    <div>
        <SearchBox/>

    </div>,
    document.getElementById('root')

);
