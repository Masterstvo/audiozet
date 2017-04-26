import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class SelectYear extends Component {
    constructor(props) { 
          super(props)
    }
  
    leftToggle(){
        this.props.clickLeftToggle();
    }
  
    rightToggle(){
        this.props.clickRightToggle();
    }

    render() {
        let date = new Date(this.props.testStore.year, this.props.testStore.month).toLocaleString('ru', { year: 'numeric'});
        return (
            <div className="Month">
                <div className='leftToggle' onClick={this.leftToggle.bind(this)}>◄</div>
                <span id='month'>
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
            dispatch({type: "LEFTTOGGLE-YEAR", amount: 1});
        },
        clickRightToggle: () => {
            dispatch({type: "RIGHTTOGGLE-YEAR", amount: 1});
        },
    })
)(SelectYear);