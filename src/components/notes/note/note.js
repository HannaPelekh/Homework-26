import "./note.css"
import AppInput from "../../../shared/input.control";
import { useState } from "react";

export default function Note ({
    onNodeEdite,
    note,         
}){ 
const [state, setState] = useState({
    note,    
    noteEmpty: {
        title: 'there is no note',
    },
    isEditMode: false,  
    isTextMode: true});
     
    function renderNoteContent(note) { 
        if(!state.isEditMode){ 
            return (
                <h2 className="title" onClick={onActivateEdite}>
                    {note.title}                    
                </h2>                
            )
        } 
        if(!state.isTextMode){
            
            return (
                <AppInput                    
                    name={"note_input"}
                    className={"note_input"}
                    placeholder={""}                      
                    value={note.title === state.noteEmpty.title ? '' : note.title}           
                    onChange={(e) => {                        
                        onNodeEdite(e.target.value)}}   
                        onBlur={onAddText}                 
                    >
                </AppInput>
            )
        }       
    }
    function onActivateEdite(){ 
        const newState = {...state, isEditMode: true, isTextMode: false}
        setState(newState)         
    }  
    function onAddText(){
        
        const newState = {...state, isEditMode: false, isTextMode: true}
        setState(newState)
    }  
    return (         
        <>            
            <div className="note_items">
                {renderNoteContent(note)}  
            </div>
        </>
    );   
} 


