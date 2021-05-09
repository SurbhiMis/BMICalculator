import React from 'react'
import './../App.css'
import {useDispatch} from 'react-redux'

function Button({type,value,typeValue}) {
    const dispatch= useDispatch();

    const calculate = () =>{
        dispatch({
            type: type,
        });
    } 
        return (
            <div>
                <button type={typeValue} className="btn" onClick={calculate}>{value}</button>
            </div>
        )
}

export default Button
