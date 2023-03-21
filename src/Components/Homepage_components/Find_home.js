/* eslint-disable react/jsx-pascal-case */

import React, { Component } from 'react';
import FindService_logo from './Logo';
import Login from './Login';
import Search from './Search';
import Items from './Items';
// import Register_big from './Register_big';
import LoginPage from '../Log-Pages/LoginPage';
import Loginhalf2 from '../Log-Pages/Loginhalf2';
// import RegisterPage from '../Log-Pages/RegisterPage';
// import RegisterModal from '../Log-Pages/RegisterModal';




class Homepage extends Component {
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
        const d = new Date();
        let year = d.getFullYear();
        return ( 
            <div className = "mainpage" >
                {
                    this.state.show1 ?
                    <LoginPage >
                        <Loginhalf2 dont1={this.dontShowModalHandler1}/>
                    </LoginPage> : null
                }
                {/* {
                    this.state.show2 ?
                    <RegisterModal dont2={this.dontShowModalHandler2}>
                        <RegisterPage />
                    </RegisterModal> : null
                } */}
                <FindService_logo />
                <Login dent1={this.show1ModalHandler} />
                <Search />
                <Items />
                {/* <Register_big dent2={this.show2ModalHandler} />     */}
                <div className='copyright'>COPYRIGHT {year}. DEXT SOLUTIONS CONSULT</div>
            </div>
        );
    }
}

export default Homepage;