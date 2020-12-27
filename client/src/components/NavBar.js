import React from 'react'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import SignUp from './Signup';
import {setSignUpDisplay} from '../store/actions';

const Navbar = function ({setModal, signUpModalState }) {

    



    return (
        <div>
            <div className='navBar'>
                <div className='logo'>W!</div>
                <span>
                    <MyButton> ✖ LOGIN ✖</MyButton>
                    <MyButton  onClick={()=>setModal(true)}> ✖ SIGN UP ✖</MyButton>
                </span>
            </div>
            <div>
                <Modal  open={signUpModalState} onClose={()=>setModal(false)}>
                    {<SignUp/>}
                </Modal>
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

const MySignModal = styled(Modal)({
    zIndex: "1",
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
});

const mapStateToProps = (state) => {
    return {
        signUpModalState: state.signUpModalState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setModal : (value ) => dispatch(setSignUpDisplay(value)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)