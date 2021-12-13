import React, { useEffect, useState } from "react";
import { useUser } from "../context/user";
//import { ModalStyled , BackDrop } from "./styles/Modal.styled";
import Pagination from "./Pagination";
import PropTypes from 'prop-types';
import { useAdmin } from "../pages/Admin";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TableFooter from '@material-ui/core/TableFooter';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #303031',
    'border-radius': '2px',
    boxShadow: 24,
    p: 4,
}


Pagination.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

// Admin Usager
const AdminUsager = () => {
    //const { user } = useUser();
    const { deleteUsager } = useUser();
    const [usagers, setUsagers] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = (id) => setOpen(true);
    const handleClose = () => setOpen(false);
    const [setUsager, setUsagerState] = useState("Monsieur");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    //const [setRoute, setRouteState] = useState("user");
    const { RouteAdmin } = useAdmin();

    const { getUsagers } = useUser();
    useEffect(() => {
        getUsagersAdmin();
    }, []);

    const getUsagersAdmin = async () => {
        getUsagers().then(({ data }) => {
            setUsagers(data);
           
        });
    };

  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - usagers.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    return (
        <div>
            <div>
                <h4>Les usagers de vino</h4>
                <Button variant="outlined" size='small' onClick={() => RouteAdmin('AjoutUsager')}>Ajouter</Button>
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
                        <Button variant="outlined" size='small' onClick={() => RouteAdmin('AjoutUsager', usager.id ,usager.name, usager.email, usager.privilege_id)}>
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
            <TableFooter>
            <TableRow>
              <Pagination
                rowsPerPageOptions={[5, 10, 25, { label: 'Tous', value: -1 }]}
                colSpan={3}
                count={usagers?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {
                    'aria-label': 'Rangée par page',
                    },
                    native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={Pagination}
              />
                </TableRow>
            </TableFooter>
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