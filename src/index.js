import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCTB2Nsp6RR7T9VJKIkYb_T1dxRs0I0ax4';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));