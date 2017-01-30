import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this._rows = [1, 2, 3, 4, 5, 6];
        this._cols = [1, 2, 3, 4, 5, 6, 7];
    }
    
    getTable(value){
        let number = 1;
        let idTd = 1;
        let firstDay = new Date(value.year, value.month, 1).getDay();
        if (firstDay === 0) firstDay = 7;
        let exitDay = 33 - new Date(value.year, value.month, 33).getDate();
        
        return (
                <tbody>
                    <tr className='contentTh'><th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Bс</th></tr>
                    {this._rows.map( itemTr => 
                                        <tr key={itemTr} id={itemTr}>
                                            {this._cols.map( itemTd =>
                                                <td key={itemTd} id={idTd++} className={ ( idTd > firstDay && idTd <= exitDay + firstDay ) ? 'cell' : 'default' } >
                                                    { ( idTd > firstDay && idTd <= exitDay + firstDay ) ? <div className='today'>{number++}</div> : null }
                                                </td>)}
                                        </tr>)}
                </tbody>
        );
    }
    
    render() {
        return (
            <div className="content">
                <table id='table'>
                    {this.getTable(this.props.store)}
                </table>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    })
)(Content);