import React from 'react'
import { useDispatch } from 'react-redux'

function InputField({placeholder,type}){
        const dispatch = useDispatch();
   
    function setValue(value){
            dispatch({
                type: type,
                value : value
            })

        }
        
        return (
            <div>
                <input type="number" onChange={event=>setValue(event.target.value)} placeholder={placeholder}  className="input-field"/>
            </div>
        )
    }


export default InputField
