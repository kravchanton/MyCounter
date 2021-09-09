import React from 'react';

export type CounterType ={
   count: number
    maxValue: number
}

export const Counter = (props: CounterType) => {
    return (
        <div className="display" style={props.count === props.maxValue ? {color: 'red'} : {color: "white"}}>
            {props.count}
        </div>
    )
}