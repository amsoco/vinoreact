import React, { useEffect, useState } from "react";
import { useCellier } from "../context/cellier";
import useDebounce from "../hooks/useDebounce";
import Recherche from "./Recherche";
import { useAdmin } from "../pages/Admin";

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


// composante Admin Wiki Vin
const AdminWikiVin = () => {
    const [resultsWiki, setResultsWiki] = useState();
    const { searchWiki } = useCellier();
    const { supprimerBouteille } = useCellier();
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);
    const [isSearching, setIsSearching] = useState(false);
    const [setBouteille, setBouteilleState] = useState("");
    const [nomBouteille, setNomBouteille] = useState();
    const [open, setOpen] = useState(false);
    const handleOpen = (id) => setOpen(true);
    const handleClose = () => setOpen(false);
    
    
    useEffect(() => {
        if (debouncedSearch) {
            setIsSearching(true);
            searchWiki(debouncedSearch).then((results) => {
                setIsSearching(false);
                console.log(results);
                setResultsWiki(results.data);
                console.log(resultsWiki);
                
            });
        } 
        setIsSearching(false);

    }, [debouncedSearch]);


    return (
        <div>
        <div>
            <h4>Wiki Vino</h4>
        </div>
    <input type="text" id="rechercheAdmin" name="rechercher" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Recherche'/>
    {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    
    <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell align="right">Pays</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Millesime</TableCell>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              
              { resultsWiki?.map((result) => (
                <TableRow
                    key={result?.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell scope="cellier">
                    {result?.nom}
                    </TableCell>
                    <TableCell align="right">{result?.pays}</TableCell>
                    <TableCell align="right">{result?.description}</TableCell>
                    <TableCell align="right">{result?.millesime}</TableCell>
                    <TableCell align="right"><img style={{height:"50px"}} src={result?.url_img}/> </TableCell>
                    <TableCell align="right">
  
                        <Button variant="outlined" size='small' onClick={() => RouteAdmin('AjoutBouteilleWiki', result)}>
                            Modifier
                        </Button>

                        <Button variant="outlined" size='small' onClick={() => {
                            handleOpen()
                            setBouteilleState(result?.id)
                            setNomBouteille(result?.nom)
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
            Voulez-vous vraiment effacer {nomBouteille} ?
          </Typography>

          <Button variant="outlined" size='small' onClick={handleClose}>Non</Button>
          <Button style={styleButton} variant="outlined" size='small' onClick={() => {
            supprimerBouteille(setBouteille)
            //getBouteillesAdmin(); 
            handleClose();
            }} >Oui</Button>

        </Box>
        </Modal>
    

    
    </div>
    )

}
export default AdminWikiVin;