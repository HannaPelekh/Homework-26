import "./create-form.css"
import { useState } from "react";
import Appbutton from "../../../shared/button.control";
import AppInput from "../../../shared/input.control";
import { clear } from "@testing-library/user-event/dist/clear";

export default function CreateForm ({    
    cb,           
    note = {title:""},
    value = "",
}){    
    const [state, setState] = useState(note);

    function setProperty(e){
        const newState = {...state}        
        newState[e.target.name] = e.target.value;
        setState(newState);        
        return newState        
    }  
    function clear() {              
        const Note = {...state};
        setState({
            ...state,           
            ...note,
             title : '',
        })
        return Note;
    }
    return (
        <>
        <div className="create_form">
            <AppInput             
                name={"title"}
                className={"create_title"}
                placeholder={"what I shouldn't forget"}    
                value={state.title} 
                onChange={setProperty}                                                                      
            ></AppInput>
            <Appbutton 
            className={"create_btn"}
            cb={() => {
                cb(state)                
                clear()
            }}>+</Appbutton>
        </div>
        </>
    );    
}   