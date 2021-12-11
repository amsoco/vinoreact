import React, { useEffect, useState } from "react";
import { useUser } from "../context/user";


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





// Admin Usager
const AdminUsager = () => {
    const { user } = useUser();
    const [usagers, setUsagers] = useState([]);

    const { getUsagers } = useUser();
    useEffect(() => {
        getUsagersAdmin();
    }, []);

    const getUsagersAdmin = async () => {
        getUsagers().then(({ data }) => {
            setUsagers(data);
            console.log(data)
        });
    };




    return (
        <div>
            <div>
                <h4>Usager</h4>
                <Button variant="outlined" size='small' >Ajouter</Button>
            </div>
        <input type="text" id="rechercheAdmin" name="rechercher" placeholder='Recherche'/>
        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell align="right">Courriel</TableCell>
                <TableCell align="right">Privilège</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usagers.map((usager) => (
                <TableRow
                  key={usager.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="usager">
                    {usager.name}
                    </TableCell>
                    <TableCell align="right">{usager.email}</TableCell>
                    <TableCell align="right">{usager.privilege_id}</TableCell>
                    <TableCell align="right">
                        <Button variant="outlined" size='small'>
                            Modifier
                        </Button>
                        <Button variant="outlined" size='small' >
                            Delete
                        </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      );
}


export default AdminUsager;