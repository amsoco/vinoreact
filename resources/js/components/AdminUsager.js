import React, { useEffect, useState } from "react";
import { useUser } from "../context/user";
//import styled from "styled-components";
import Pagination from "./Pagination";
import PropTypes from 'prop-types';
import { useAdmin } from "../pages/Admin";
import useDebounce from "../hooks/useDebounce";
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


// Les styles du Modal 
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

// Pour définir l'espacement des boutons dans modal
const styleButton = {
  'margin': '10px',
}


Pagination.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

// Admin Usager
const AdminUsager = () => {
    const { searchUsager } = useUser();
    const { deleteUsager } = useUser();
    const [usagerNom, setNomUsager] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = (id) => setOpen(true);
    const handleClose = () => setOpen(false);
    const [setUsager, setUsagerState] = useState("Monsieur");
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const { RouteAdmin } = useAdmin();
    const { getUsagers } = useUser();
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);
    const [results, setResults] = useState();
    const [isSearching, setIsSearching] = useState(false);


    useEffect(() => {
      if (debouncedSearch) {
          setIsSearching(true);
          searchUsager(debouncedSearch).then((results) => {
              setIsSearching(false);
              setResults(results.data);
          });
      } else {
        getUsagersAdmin();
        setIsSearching(false);
      } 
    }, [debouncedSearch]);


    const getUsagersAdmin = () => {
        getUsagers().then(({ data }) => {
            setResults(data);
        });
    };

    /*
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - results?.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value));
      setPage(0);
    };
    */


    console.log(results?.length)
    
    return (
        <div>
            <div>
                <h4>Les usagers de vino</h4>
                <Button variant="outlined" size='small' onClick={() => RouteAdmin('AjoutUsager')}>Ajouter</Button>
            </div>
        <input type="text" id="rechercheAdmin" name="rechercher" placeholder='Recherche' value={search} onChange={(e) => setSearch(e.target.value)}/>
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
              
              { results?.map((result) => (
                <TableRow
                    key={result?.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="usager">
                    {result?.name}
                    </TableCell>
                    <TableCell align="right">{result?.email}</TableCell>
                    <TableCell align="right">{result?.privilege_id}</TableCell>
                    <TableCell align="right">
  
                        <Button variant="outlined" size='small' onClick={() => RouteAdmin('AjoutUsager', result?.id ,result?.name, result?.email, result?.privilege_id)}>
                            Modifier
                        </Button>

                        <Button variant="outlined" size='small' onClick={() => {
                            handleOpen()
                            setUsagerState(result?.id)
                            setNomUsager(result?.name)
                            }} >
                            Delete
                        </Button>
  
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
            <TableRow>
              {/* <Pagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={results?.length || 20}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={Pagination}
              /> */}
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
            Voulez-vous vraiment effacer {usagerNom} ?
          </Typography>

          <Button variant="outlined" size='small' onClick={handleClose}>Non</Button>
          <Button style={styleButton} variant="outlined" size='small' onClick={() => {
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