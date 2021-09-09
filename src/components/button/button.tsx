import React, {MouseEventHandler} from 'react';
import {NavLink} from "react-router-dom";

export type ButtonType = {
    count: number
    inc: () => void
    reset: () => void
    maxValue: number
    startValue: number

}


export const ButtonInc = (props: ButtonType) => {
    return (
        <div className="btnWrap">
            <button className={'button'} style={props.count === props.maxValue ? {opacity: "0.5"} : {opacity: "1"}}
                    disabled={props.count === props.maxValue} onClick={props.inc}>Inc
            </button>
            <button className={'button'} style={props.count === 0 ? {opacity: "0.5"} : {opacity: "1"}}
                    disabled={props.count === 0} onClick={ props.reset}>reset
            </button>
            <button className={'button'}><NavLink className="tags" to='/set'>Set</NavLink>
            </button>
        </div>
    )
}

