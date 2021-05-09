import React from 'react'
import Button from './Button'
import InputField from './InputField'
import './../App.css'
import OutputField from './OutputField'
import {createStore} from 'redux'
import {Provider}  from 'react-redux';

const initState = {
    result : '',
    weight: '',
    height:'',
    status:''
}
const reducer = (state= initState,action)=>{
    switch(action.type){
        case "setWeight" : return {
            ...state,
            weight: action.value 
        }
        case "setHeight" : return {
            ...state,
            height: (parseInt(action.value) /100)
        }

        case 'result': if(state.weight > 0 && state.height>0)
        {
            const res = eval(state.weight /(state.height *  state.height)).toFixed(2);
                if(res < 18.5){
                return {
                    ...state,
                    result: res,
                    status:"UnderWeight"
                }
            }
            else if(res >= 18.5 && res<=24.9){
                return {
                    ...state,
                    result: res,
                    status:"Normal Weight"
                    }
            }else if(res >= 25.0 && res<=29.9){
                return {
                    ...state,
                    result: res,
                    status:"Overweight"
                }
            }
            else if(res >= 30.0 && res<=34.9){
                return {
                    ...state,
                    result: res,
                    status:"Obesity class I"
                }
            }
                else if(res >= 35.0 && res<=39.9){
                    return {
                        ...state,
                        result: res,
                        status:"Obesity class II"
                    }
                }else
                if(res>40){
                        return {
                            ...state,
                            result: res,
                            status:"Obesity class III"
                        }
                }
                else{
                    return state;
                }
        
        }
        else{
            alert("Value of height and weight must be greater than 0");
            return initState;
        }
             
        case 'clear':
            return initState;
       
        default:
            return state;
    }
    
}
const store = createStore(reducer);

function BMICalculator(){
    
        return (
            <Provider store={store}>
            <div className="inner-container">
                <form>
                <div>
                    <h2 style={{textAlign:'center'}}>BMI Calculator</h2>
                </div>
                <div>
                    <div>
                        <span>Height <span style={{fontSize:'small'}}>(in cm)</span></span>
                        <InputField placeholder="Height in cm" type="setHeight" />
                    </div>
                    
                    <div>
                    <span>Weight <span style={{fontSize:'small'}}>(in kg)</span></span>
                        <InputField placeholder="Weight in kg" type="setWeight"  />
                    </div>
                </div>

                <div className="btn-grp">
                    <Button value="Calculate" type="result" typeValue="button" />
                    <Button value="Clear" type='clear' typeValue="reset" />
                </div>

                <div >
                    <OutputField/>
                </div>
                </form>
            </div>
            </Provider>
        )
    }

export default BMICalculator
