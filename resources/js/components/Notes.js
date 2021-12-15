import React, { useState } from "react";
import PropTypes from "prop-types";
import { useCellier } from "../context/cellier";
import { NotesCountainer } from "./styles/Notes.styled";
import { Select } from "../components/styles/Input.styled";
import Bouteille from "../assets/images/bouteilleGris.png";
import Tache from "../assets/svg/tacheNote.svg";

const Notes = ({ note, bouteilleId }) => {
    const [setOpacity, setOpacityState] = useState("0");
    const [noteBouteille, setNoteBouteille] = useState(note);
    const { updateNoteBouteille } = useCellier();

    /**
     * Afficher le sélecteur de modification de la note
     * @returns {void}
     */
    const modifierNote = () => {
        setOpacityState("100%");
    };

    /** Mettre à jour la note
     * @param {EventObject} e
     * @param {number} bouteilleId
     * @returns {void}
     */
    const onSelectChange = async (e, bouteilleId) => {
        const noteNew = parseInt(e.target.value);
        setNoteBouteille(noteNew);
        await updateNoteBouteille(bouteilleId, noteNew);
        setOpacityState("0");
    };

    return (
        <NotesCountainer>
            <div>
                <span>
                    {[...Array(noteBouteille || note)].map((_, i) => (
                        <img key={i} src={Tache} alt="tache de vin " />
                    ))}
                </span>
                <span>
                    {[...Array(5)].map((_, i) => (
                        <img key={i} src={Bouteille} alt="bouteille" />
                    ))}
                </span>
            </div>
            <div>
                <button onClick={modifierNote}>Modifier note</button>
                <Select
                    style={{
                        opacity: `${setOpacity}`,
                        transition: "opacity 0.4s ease",
                    }}
                    name="cellier"
                    onChange={(e) => onSelectChange(e, bouteilleId)}
                    value={noteBouteille || note}
                >
                    {[...Array(5)].map((_, i) => (
                        <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                </Select>
            </div>
        </NotesCountainer>
    );
};

NotesCountainer.prototype = {
    note: PropTypes.number.isRequired,
    bouteilleId: PropTypes.number.isRequired,
};

export default Notes;
