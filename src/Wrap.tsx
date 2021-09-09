import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/scoreboard/scoreboard";
import {ButtonInc} from "./components/button/button";
import {Set} from "./set";
import {BrowserRouter, Route} from 'react-router-dom';
import {NavLink} from "react-router-dom";

export type WrapPropsType = {
    count: number
    inc: () => void
    reset: () => void
    startValue: number
    maxValue: number

}


function Wrap(props: WrapPropsType) {

    return (

        <div className="App">
            <Counter count={props.count}
                     maxValue={props.maxValue}/>
            <ButtonInc count={props.count}
                       inc={props.inc}
                       reset={props.reset}
                       maxValue={props.maxValue}
                       startValue={props.startValue}/>


        </div>


    )
}

export default Wrap;
