import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectYear from './SelectYear';

class SelectMonth extends Component {
    
    moveIndex() {
      let calendar = document.querySelector('.calendar');
      let selectYear = document.querySelector('.selectYear');
      calendar.style.transform = '';
      selectYear.style.transform = '';
    }
  
    render(){
        return (
            <div className='selectYear'>
                <SelectYear />
                <div className='popupEl'>Январь</div>
                <div className='popupEl'>Феыраль</div>
                <div className='popupEl'>Март</div>
                <div className='popupEl'>Апрель</div>
                <div className='popupEl'>Май</div>
                <div className='popupEl'>Июнь</div>
                <div className='popupEl'>Июль</div>
                <div className='popupEl'>Август</div>
                <div className='popupEl'>Сентябрь</div>
                <div className='popupEl'>Октябрь</div>
                <div className='popupEl'>Ноябрь</div>
                <div className='popupEl'>Декабрь</div>
                <div className='return' onClick={this.moveIndex.bind(this)}>⬇</div>
            </div>
        ); 
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(SelectMonth);