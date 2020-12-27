import React from 'react'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';


const Navbar = function() {
    return (
        <div>
        <div className='navBar'>
            <div className='logo'>W!</div>
            <span>
            <MyButton> ✖ LOGIN ✖</MyButton>
            <MyButton> ✖ SIGN UP ✖</MyButton>
            </span>
        </div>
        <div>

        </div>
        </div>
    )
}


// MATERIAL-UI STYLED

const MyButton = styled(Button)({
    border: 0,
    borderRadius: 3,
    color: '#9E4FFF',
    height: '100%',
    padding: '0 30px',
    fontFamily: 'Ubuntu',
  });

  export default connect()(Navbar)