import React, { useEffect, useState } from "react";
import { useCellier} from "../context/cellier";
import Recherche from "./Recherche";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Admin from "../pages/Admin";


// composante Admin Wiki Vin
const AdminWikiVin = () => {
    const [wikiVino, setWikiVino] = useState([]);
    const { searchWiki } = useCellier();
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        searchWikiAdmin();
    }, []);

    const searchWikiAdmin = async () => {
        // getUsagers().then(({ data }) => {
        //     setWikiVino(data);
        //     console.log(data)
      //  });
    };




    return (
        <Admin>
            <div>
            <div>
                <h4>Wiki Vino</h4>
            </div>
            {/* <input type="text" id="rechercheAdmin" name="rechercher" placeholder='Recherche'/> */}
            {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
            <Recherche
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
    
            </div>
        </Admin>
    )

}
export default AdminWikiVin;