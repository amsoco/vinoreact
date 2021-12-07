import React, { useEffect, useState } from "react";
import { NotesCountainer } from "./styles/Notes.styled";
import Bouteille from "../assets/images/bouteilleGris.png";
import Tache from "../assets/svg/tacheNote.svg";
import { Select } from "../components/styles/Input.styled";



const Notes = ({note , bouteille}) => {
    const [setOpacity, setOpacityState] = useState("0");
    const [setNote, setNoteState] = useState(note);

    const modifierNote = () => {
        setOpacityState("100%");
    }


    const onSelectChange = (e, bouteille) => {
        const noteNew = e.target.value;
        //updateNote(bouteille, noteNew)
        //console.log(e.target.value)
        setOpacityState("0");
       // note = e.target.value;
        
        setNoteState(parseInt(e.target.value))
    };

    const updateNote = async (bouteille, noteNew) => {
        await Http.put(`bouteilles/notes/${bouteille}`, {
            notes: noteNew,
        }).then(() => {
            getBouteille(bouteille);
        });
    };


console.log(setNote)
    return (
        <NotesCountainer>
            <div>
                <span>
                    {[...Array(setNote)].map((e, i) =><img key={i} src={Tache} alt="tache de vin "/>)}
                </span>
                <span>
                    {[...Array(5)].map((e, i) =><img key={i} src={Bouteille} alt="bouteille"/>)}
                </span>
            </div>
            <div>
                    <button onClick={modifierNote}>Modifier note</button>
                    <Select style={{opacity: `${setOpacity}`, transition: "opacity 0.4s ease"}} name="cellier" onChange={onSelectChange} value={setNote.toString()}>
                        <option value='1' >1</option>
                        <option value='2' >2</option>
                        <option value='3' >3</option>
                        <option value='4' >4</option>
                        <option value='5' >5</option>
                    </Select>
            </div>
        </NotesCountainer>
    );
};

export default Notes;