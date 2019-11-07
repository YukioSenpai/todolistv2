import React from 'react';

import back from './back.png';

import gif from './2.gif';
import gifMario from './mario.gif';
import browser from './browser.gif';
import b1 from './boiteSpe.gif';
import b from './boite.gif';
import bv from './bouleVerte.gif';
import m from './marron.gif';
import t from './tube.gif';

import styled from 'styled-components';

import '../../App.css';

const WrapperBack = styled.div`
    height: 100vh;
    width:100%;
`;

const WrapperGif = styled.div`
    display: block;
    margin-left: auto;
    margin-top: 10px;
    margin-right: auto;
    width: 15%;
`;

const WrapperGif1 = styled.div`
    display: block;
    margin-left: auto;
    margin-top: 180px;
    margin-right: auto;
    width: 100%;
`;

const WrapperGif2 = styled.div`
    display: block;
    margin-left: 1150px;
    margin-top: -165px;
    margin-right: auto;
`;

const WrapperGif3 = styled.div`
    display: block;
    margin-left: 550px;
    margin-top: -315px;
    margin-right: auto;
`;

const WrapperGif4 = styled.div`
    display: block;
    margin-left: 630px;
    margin-top: -82px;
    margin-right: auto;
`;

const WrapperGif5 = styled.div`
    display: block;
    margin-left: 704px;
    margin-top: -85px;
    margin-right: auto;
`;

const WrapperGif6 = styled.div`
    display: block;
    margin-left: 778px;
    margin-top: -85px;
    margin-right: auto;
`;

const WrapperGif7 = styled.div`
    display: block;
    margin-left: 778px;
    margin-top: 115px;
    margin-right: auto;
`;

const WrapperGif8 = styled.div`
    display: block;
    margin-left: 498px;
    margin-top: -100px;
    margin-right: auto;
`;

const WrapperGif9 = styled.div`
    display: block;
    margin-left: 308px;
    margin-top: -220px;
    margin-right: auto;
`;

const Home = () => {

    return (
            <WrapperBack style={{background: `url(${back})`}}>
                <WrapperGif>
                    <img src={gif} width="200px" alt="gif"/>
                </WrapperGif>
                <WrapperGif1>
                    <img src={gifMario} width="200px" alt="gif"/>
                </WrapperGif1>
                <WrapperGif2>
                    <img src={browser} width="200px" alt="gif"/>
                </WrapperGif2>
                <WrapperGif3>
                    <img src={b1} width="80px" alt="gif"/>
                </WrapperGif3>
                <WrapperGif4>
                    <img src={b} width="80px" alt="gif"/>
                </WrapperGif4>
                <WrapperGif5>
                    <img src={b} width="80px" alt="gif"/>
                </WrapperGif5>
                <WrapperGif6>
                    <img src={b} width="80px" alt="gif"/>
                </WrapperGif6>
                <WrapperGif7>
                    <img src={bv} width="100px" alt="gif"/>
                </WrapperGif7>
                <WrapperGif8>
                    <img src={m} width="80px" alt="gif"/>
                </WrapperGif8>
                <WrapperGif9>
                    <img src={t} width="130px" alt="gif"/>
                </WrapperGif9>
            </WrapperBack>
    ) 
};

export default Home;
