import React, {useState, useEffect} from 'react'
import "./App.css";
import axios from 'axios'
import { Component } from 'react/cjs/react.production.min';
import styled from 'styled-components';


function App() {
    const [advice, setAdvice] = useState('');
    // const adviceData = await axios.get('https://api.adviceslip.com/advice')
    const getNewAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then(respone =>{
                const { advice } = respone.data.slip;
                setAdvice(advice);
            })
            .catch(error=>{ 
                console.log(error)
            })
    }
    useEffect(() => {
        getNewAdvice();
      });

      
    return ( 
        
        <Container>
            <div>
            <h1>{ advice }</h1>
            <button onClick={getNewAdvice}> <span> Gimme advice </span> </button>
            </div>
        </Container>
    )
}

export default App

const Container = styled.div`
    height: 100%;
    background: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url('./images/city.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

        div{
            background: whitesmoke;
            width: 40%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            border-radius: 25px;
            padding: 2%;
            box-shadow: 10px 10px;
            opacity: 85%;

            // @media only screen and (min-width: 600px) {
            //     width: 80%;
            //     height: 30%;
            // }
        }
        h1{
            display: flex;
            align-items: center;
            height: auto;
        }
        button{
            position: relative;
            outline: none;
            text-decoration: none;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            text-transform: uppercase;
            height: 50px;
            width: 210px;
            opacity: 1;
            background-color: #ffffff;
            border: 1px solid rgba(22, 76, 167, 0.6);

            span {
                color: #164ca7;
                font-size: 12px;
                font-weight: 500;
                letter-spacing: 0.7px;
            }

            
        }
       
`


