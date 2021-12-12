import React, { useEffect, useState } from "react";
import { useUser } from "../context/user";
import { ModalStyled , BackDrop } from "./styles/Modal.styled";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }


// Admin Usager
const AdminUsager = () => {
    const { user } = useUser();
    const { deleteUsager } = useUser();
    const [usagers, setUsagers] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = (id) => setOpen(true);
    const handleClose = () => setOpen(false);
    const [setUsager, setUsagerState] = useState("Monsieur");
    

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
                        <Button variant="outlined" size='small' onClick={handleOpen}>
                            Modifier
                        </Button>
                        <Button variant="outlined" size='small' onClick={() => {
                            handleOpen()
                            setUsagerState(usager.id)
                            }} >
                            Delete
                        </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Attention
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Voulez-vous vraiment effacer cette usager ?
          </Typography>
          <Button variant="outlined" size='small' onClick={handleClose}>Non</Button>
          <Button variant="outlined" size='small' onClick={() => {
           // console.log(setUsager);
            deleteUsager(setUsager)
            getUsagersAdmin();
            handleClose();
            }} >Oui</Button>
        </Box>
        </Modal>
        </div>
      );
}


export default AdminUsager;