import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/scoreboard/scoreboard";
import {ButtonInc} from "./components/button/button";
import {Set} from "./set";
import {BrowserRouter, Route, Redirect} from 'react-router-dom';
import {NavLink} from "react-router-dom";
import Wrap from "./Wrap";




function App() {

    let [maxValue, setMaxValue] = useState<number>(5)
    let [startValue, setStartValue] = useState<number>(0)
    let [count, setCount] = useState<number>(startValue)


    useEffect(()=> {
        let getCount = localStorage.getItem('counterValue')
        let getMaxValue = localStorage.getItem('counterMaxValue')
        let getStartValue = localStorage.getItem('counterStartValue')
            if(getCount && getMaxValue && getStartValue) {
                setCount(JSON.parse(getCount))
                setMaxValue(JSON.parse(getMaxValue))
                setStartValue(JSON.parse(getStartValue))
            }
    },[])


    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(count))
        localStorage.setItem('counterStartValue', JSON.stringify(startValue))
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValue))
    }, [count, startValue, maxValue]);


    function changeMaxValue(value:number) {
        setMaxValue(value)

    }
    function changeStartValue(value:number) {
        setStartValue(value)

    }

    let inc = () => setCount(count + 1)
    let reset = () => setCount(startValue)


    return (
        <BrowserRouter>
            <Route path={'/'} exact render={() => <Redirect to={'/counter'}/>}/>
            <Route path='/set' render={() => <Set changeMaxValue={changeMaxValue}
                                                  changeStartValue={changeStartValue}
                                                  maxValue={maxValue}
                                                  startValue={startValue}
                                                  /*error={error}*//>}/>
            <Route path='/counter' render={() => <Wrap count={count}
                                                       inc={inc}
                                                       reset={reset}
                                                       maxValue={maxValue}
                                                       startValue={startValue}/>
            }/>
        </BrowserRouter>

    )
}

export default App;
