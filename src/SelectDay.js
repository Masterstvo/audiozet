import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class SelectDay extends Component {
    constructor(props) { 
        super(props)
        this.state = {
            isOpen: false,
    }
  }
    leftToggle(){
        this.props.clickLeftToggle();
    }
    rightToggle(){
        this.props.clickRightToggle();
    }
    moveBlock(){
      let calendar = document.querySelector('.calendar');
      let selectYear = document.querySelector('.selectYear');
      calendar.style.transform = 'translate3d(0,+100%,0)';
      selectYear.style.transform = 'translate3d(0,0,0)';
    }
    render() {
        const isOpen = this.state.isOpen;
        let date = new Date(this.props.testStore.year, this.props.testStore.month).toLocaleString('ru', { year: 'numeric', month: 'long'});
        return (
            <div className="Month">
                <div className='leftToggle' onClick={this.leftToggle.bind(this)}>◄</div>
                <span onClick={this.moveBlock.bind(this)} id='month'>
                    {date}
                </span>
                <div className='rightToggle' onClick={this.rightToggle.bind(this)}>►</div>
            </div>
        );
    }
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        clickLeftToggle: () => {
            dispatch({type: "LEFTTOGGLE", amount: 1});
        },
        clickRightToggle: () => {
            dispatch({type: "RIGHTTOGGLE", amount: 1});
        },
    })
)(SelectDay);