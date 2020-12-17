import React from 'react'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


export default function Navbar() {
    return (
        <div className='navBar'>
            <div className='logo'>W!</div>
            <MyButton> ✖ LOGIN ✖</MyButton>
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
