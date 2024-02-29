import Input from "./Input";
import './ControlledComponent.css'
import { FormEvent, useRef, useState } from "react";


export default function ControlledComponent(){
    const checkboxRef=useRef<HTMLInputElement>(null)
    const [ErrorMsg,setErrorMsg]=useState('')

    function handleSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        if (checkboxRef.current!.checked==false){
            setErrorMsg("Warning! :You should check this box after reading terms and conditions")
        }
    }
    


    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="text">
                <h1> Create your account</h1>
                <h5>Fill the form bellow to create an account</h5>
            </div>
            <div className="inputs-container">
                <div className="name">
                    <Input desc={'First name*'} />
                    <Input desc={'Last name*'}/>
                </div>
                <div className="email">
                    <Input desc={'Email*' }/>
                </div>
                <div className="password">
                    <Input desc={'Password*'}/>
                    <Input desc={'Password Confirmation*'}/>
                </div>
            </div>  
            <div className="terms-and-conditions">
                <h5>We want your to know exactly how our service works and why need your details.</h5> 
                <h5>Please confirm that you have reed , understood and accept the <a href="#"> terms and conditions.</a></h5>
            </div> 
            <div className="checkbox">
                <input type="checkbox" ref={checkboxRef}/>
                <h5>I have read , understood and accept <a href="#">terms and conditions</a></h5>
                <h5 className="error">{ErrorMsg}</h5>
            </div>
            <button type="submit">Next</button>
        </form>

        </>
    )
}