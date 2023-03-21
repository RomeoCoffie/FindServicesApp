/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import Header from '../../Header/Header';
import './FindFree.css';
import IBody from './iFreeMainBody/IBody';
import Footer from '../../Footer/Footer';

import LoginPage from '../../Log-Pages/LoginPage';
import Loginhalf2 from '../../Log-Pages/Loginhalf2';
import RegisterPage from '../../Log-Pages/RegisterPage';
import RegisterModal from '../../Log-Pages/RegisterModal';



class FindInst extends Component {
    
    constructor () {
        super();
        this.state = {
          show1: false,
          show2: false
        };
    } 

    show1ModalHandler = () => {
        this.setState({show1: true});
    }

    dontShowModalHandler1 = () => {
        this.setState({show1: false});
    }

    dontShowModalHandler2 = () => {
        this.setState({show2: false});
    }

    show2ModalHandler = () => {
        this.setState({show2: true});
    }


    render() {
        return (
            <div>
                {
                    this.state.show1 ?
                    <LoginPage >
                        <Loginhalf2 dont1={this.dontShowModalHandler1}/>
                    </LoginPage> : null
                }
                {
                    this.state.show2 ?
                    <RegisterModal dont2={this.dontShowModalHandler2}>
                        <RegisterPage />
                    </RegisterModal> : null
                }
                <Header dent1={this.show1ModalHandler} dent2={this.show2ModalHandler} />
                <IBody />
                <Footer />
            </div>
        );
    }
}

export default FindInst;