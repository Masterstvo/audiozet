import React, { Component } from 'react';
import { connect } from 'react-redux';

class Popup extends Component {
    render(){
        return (
            <div className='popup'>
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
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(Popup);