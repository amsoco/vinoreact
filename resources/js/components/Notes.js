import React from "react";
import { NotesCountainer } from "./styles/Notes.styled";
import Bouteille from "../assets/images/bouteilleGris.png";
import Tache from "../assets/svg/tacheNote.svg";



const Notes = ({note}) => {

    return (
        <NotesCountainer>
            <div>
                <span>
                    {[...Array(note)].map((e, i) =><img key={i} src={Tache} alt="tache de vin "/>)}
                </span>
                <span>
                    {[...Array(10)].map((e, i) =><img key={i} src={Bouteille} alt="bouteille"/>)}
                </span>
            </div>
        </NotesCountainer>
    );
};

export default Notes;