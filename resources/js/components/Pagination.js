import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import TableFooter from '@material-ui/core//TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';

// composante footer
const Pagination = (props) => {

    
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
    <TablePagination
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}

        >
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="Première page"
        >

        </IconButton>
        <IconButton
            onClick={handleBackButtonClick}
            disabled={page === 0}
            aria-label="Page précédente"
        >
        
        </IconButton>
        <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Prochaine page"
        >
        
        </IconButton>
        <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Dernière page"
        >

        </IconButton>
        </Box>
    </TablePagination>
    )

}

TablePagination.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};


export default Pagination;
