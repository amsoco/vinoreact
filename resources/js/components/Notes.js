import React from "react";
import { NotesCountainer } from "./styles/Notes.styled";
import Bouteille from "../assets/images/bouteilleGris.png";
import Tache from "../assets/svg/tacheNote.svg";



const Notes = ({note}) => {


    const modifierNote = () => {
        console.log('test')
    }

    return (
        <NotesCountainer>
            <div>
                <span>
                    {[...Array(note)].map((e, i) =><img key={i} src={Tache} alt="tache de vin "/>)}
                </span>
                <span>
                    {[...Array(5)].map((e, i) =><img key={i} src={Bouteille} alt="bouteille"/>)}
                </span>
            </div>
            <div>
                    <button onClick={modifierNote}>Mofifier note</button>
            </div>
        </NotesCountainer>
    );
};

export default Notes;