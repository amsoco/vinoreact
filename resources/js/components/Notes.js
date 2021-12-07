import React, { useEffect, useState } from "react";
import { NotesCountainer } from "./styles/Notes.styled";
import Bouteille from "../assets/images/bouteilleGris.png";
import Tache from "../assets/svg/tacheNote.svg";
import { Select } from "../components/styles/Input.styled";
import { useNavigate, useParams } from "react-router";
import Http from "../HttpClient";



const Notes = ({note , bouteille}) => {
    const { bouteilleId } = useParams();
    const [setOpacity, setOpacityState] = useState("0");
    const [setNote, setNoteState] = useState(note);
   
    const modifierNote = () => {
        setOpacityState("100%");
    }

    const onSelectChange = (e, bouteilleId) => {
        const noteNew = e.target.value;
        updateNote(bouteilleId, noteNew)
        setOpacityState("0");
        setNoteState(parseInt(e.target.value))
    };

    const updateNote = async (bouteilleId, noteNew) => {
        await Http.put(`bouteilles/editnote/${bouteilleId}`, {
            note: `${noteNew}`,
        })
    };

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
                    <Select style={{opacity: `${setOpacity}`, transition: "opacity 0.4s ease"}} name="cellier" onChange={(e)=>onSelectChange(e, bouteilleId)} value={setNote}>
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