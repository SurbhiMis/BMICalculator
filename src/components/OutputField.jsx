import React from 'react'
import { useSelector } from 'react-redux'

function OutputField(props){
    const {result,status} = useSelector(state=> state);
    if(result){
        return (
            
            <div>
                <h3 style={{backgroundColor:'green',padding:5}}>Result: </h3>
                
                <h3 style={{color:'black' ,
                }}><span style={{color:'black'}}> BMI =</span> {result}kg/m<sup>2</sup>  </h3>
                    
                    <h3 style={{color:'#003a00' ,
                }}><span style={{color:'black'}}>Weight Status:</span> {status} </h3>
                    {/* <span>BMI = {result}kg/m<sup>2</sup> </span> */}
                    {/* <input type="text" readOnly style={{
                        width: 50,
                        height:30,
                        outline: 'none',
                        marginBottom: 10,
                        border:'none'
                    }} value={result}  /> */}

                    <table>
                        <tr className="table-heading">
                            <th>BMI</th>
                            <th>Weight Status</th>
                        </tr>
                        <tr>
                            <td>Below 18.5</td>
                            <td>Underweight</td>
                        </tr>
                        <tr>
                            <td>18.5-24.9</td>
                            <td>Normal Weight</td>
                        </tr>
                        <tr>
                            <td>25.0-29.9</td>
                            <td>Overweight</td>
                        </tr>
                        <tr>
                            <td>30.0-34.9</td>
                            <td>Obesity class I</td>
                        </tr>
                        <tr>
                            <td>35.0-39.9</td>
                            <td>Obesity class II</td>
                        </tr>
                        <tr>
                            <td>Above 40</td>
                            <td>Obesity class III</td>
                        </tr>
                    </table>
            </div>
        )
    }
    else return <div></div>

       
    }

export default OutputField
