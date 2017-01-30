import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Month from './Month';
import Content from './Content';

import './index.css';
import './App.css';

const initialState =  {  
                        year: new Date().getFullYear(),
                        month: new Date().getMonth(),
                        day: new Date().getDate()
                        };

function reducer(state = initialState, action){
    switch (action.type) {
        case 'LEFTTOGGLE': return { 
                        year: new Date(state.year, state.month -1).getFullYear(),
                        month: new Date(state.year, state.month -1).getMonth(),
                        day: new Date(state.year, state.month -1).getDate()                
        };
        case 'RIGHTTOGGLE': return { 
                        year: new Date(state.year, state.month +1).getFullYear(),
                        month: new Date(state.year, state.month +1).getMonth(),
                        day: new Date(state.year, state.month +1).getDate() 
        };
        default: return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <div className='Diary'>
            <Month />
            <Content />
        </div>
    </Provider>,
  document.getElementById('root')
);
