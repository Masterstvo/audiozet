import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SelectDay from './SelectDay';
import Content from './Content';
import SelectMonth from './SelectMonth';
import state from './STORE';

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
        case 'LEFTTOGGLE-YEAR': return { 
                        year: new Date(state.year - 1, state.month).getFullYear(),
                        month: new Date(state.year - 1, state.month).getMonth(),
                        day: new Date(state.year - 1, state.month).getDate()                
        };
        case 'RIGHTTOGGLE-YEAR': return { 
                        year: new Date(state.year + 1, state.month).getFullYear(),
                        month: new Date(state.year + 1, state.month).getMonth(),
                        day: new Date(state.year + 1, state.month).getDate()                
        };
        default: return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <div className='Diary'>
          <SelectMonth />
          <div className='calendar'>
            <SelectDay />
            <Content />
          </div>
        </div>
    </Provider>,
  document.getElementById('root')
);
