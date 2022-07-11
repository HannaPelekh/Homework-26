import "./notes.css"
import React from "react"
import CreateForm from "./create-form/create-form";
import NotesList from "./notes-list/list";

const notes = [];
export default class NotesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {              
            notes: [], 
            value: "",          
            noteEmpty: {
                title: 'there is no note',                
            }, 
        }; 
        this.onNodeCreate = this.onNodeCreate.bind(this); 
        this.onNodeEdite = this.onNodeEdite.bind(this);       
    }
    render () {
        return (       
            <div className="notes_container">
                <CreateForm 
                    cb={this.onNodeCreate}                                                    
                ></CreateForm>
                <NotesList 
                    notes = {this.state.notes} 
                    onNodeEdite = {this.onNodeEdite}                   
                    >
                </NotesList>
            </div>
        )
    } 
    onNodeCreate(note){        
        this.setState({
            ...this.state, 
            notes: [...this.state.notes, {
                ...note, 
                title: note.title ? note.title : this.state.noteEmpty.title,
                id: Date.now()}]
        })         
    }       
    onNodeEdite(value, id) { 
        this.setState({
            ...this.state,
            notes: [...this.state.notes
                .map(note => {
                    if(note.id === id) {                        
                        return {...note, title: value ? value : this.state.noteEmpty.title}
                    }else{
                        return note;
                    }
                }
            )
        ]})
    }
   
}
