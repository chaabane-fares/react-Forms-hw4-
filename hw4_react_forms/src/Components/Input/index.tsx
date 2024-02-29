import { ChangeEvent, useState } from 'react'
import './index.css'


export default function Input({desc}:{desc:string}){ 
    const [inputValue,setInputValue]=useState('')
    function handleChange(event:ChangeEvent<HTMLInputElement>){
        setInputValue(event.target.value)
    }
    return(
        <>
        <form action="">
            <div className='input-container'>
                <h5>{desc}</h5>
                <input type="text" required maxLength={15}  onChange={handleChange}/>
            </div>
        </form>
        </>
    )
}