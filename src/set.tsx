import React, {ChangeEventHandler, MouseEventHandler} from 'react';
import {NavLink} from "react-router-dom";
import './App.css';

export type SetPropsType = {
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
    maxValue: number
    startValue: number
/*    error: boolean*/

}

export const Set=(props: SetPropsType) => {


    const disableMode = () => {
        if(props.maxValue < 1 || props.maxValue === props.startValue || props.startValue < 0 || props.maxValue < props.startValue) {
            return "inputError"
        }
        else return "input"
    }

    debugger

    return (
        <div className="App">
            <div className="row"><span>Max value:</span> <input className={disableMode()} type="number" value={props.maxValue}  onChange={(e) => props.changeMaxValue(+e.currentTarget.value)}/></div>
            <div className="row"><span>Start value:</span> <input className={disableMode()} type="number" value={props.startValue} onChange={(e)=> props.changeStartValue(+e.currentTarget.value)}/></div>
            <button className={'button'}><NavLink className="tags" to='/counter'>Set</NavLink>
            </button>
        </div>
    )
}