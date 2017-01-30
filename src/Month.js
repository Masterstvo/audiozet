import React, { Component } from 'react';
import { connect } from 'react-redux';
import Popup from './Popup';
import './App.css';

class Month extends Component {
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
    popUpMonth(){
        this.setState({ isOpen: !this.state.isOpen })
    }
    render() {
        const isOpen = this.state.isOpen;
        let date = new Date(this.props.testStore.year, this.props.testStore.month).toLocaleString('ru', { year: 'numeric', month: 'long'});
        return (
            <div className="Month">
                <div className='leftToggle' onClick={this.leftToggle.bind(this)}>◄</div>
                <span onClick={this.popUpMonth.bind(this)} id='month'>
                    {date}
                    {isOpen && <Popup />}
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
)(Month);