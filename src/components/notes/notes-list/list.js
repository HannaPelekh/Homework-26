import "./list.css"
import Note from "../note/note";

export default function NotesList({notes, onNodeEdite}){    
    return (
        <>
            <div className="notes_list">
            {notes.map((note) => (
                <Note   
                    onNodeEdite = {(value) => onNodeEdite(value, note.id)}          
                    key = {note.id} 
                    note = {note}                
                    children = {note.title}
                ></Note>
            ))}                
            </div>
        </>
    );
}

