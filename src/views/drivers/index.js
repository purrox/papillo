import React from 'react';
import PropTypes from 'prop-types';

import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector,
} from '@material-ui/data-grid';
import Paper from "@material-ui/core/Paper";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
const columns = [
    { field: 'id', headerName: 'ID', width: 170,  align:'center',
        headerAlign: 'center', },
    { field: 'firstName', headerName: 'Nombre', width: 170,   align:'center',
        headerAlign: 'center',},
    { field: 'lastName', headerName: 'Apellido', width: 170,  align:'center',
        headerAlign: 'center',},
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 170,
        align:'center',
        headerAlign: 'center',
    },
    {
        field: 'Cedula',
        headerName: 'Cedula',
        width: 170,
        value: 'CRA-452',
        align:'left',
        headerAlign: 'left',
        renderCell: (params)=>{return <div>200640021</div>}
    },
    {
        field: "actions",
        headerName: "Acciones",
        sortable: false,
        width: 170,
        disableClickEventBubbling: true,
        headerAlign: 'center',
        align:'center',
        renderCell: (params) => {
            return (
                <ActionButtons/>
            );
        }
    }

];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 123 },
    { id: 6, lastName: 'Melisandre', firstName: 'Red', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Drivers = props => {
    return (
        <div>
            <h1 color="secondary">Drivers</h1>
            <Paper>
                <div style={{ height: 600, background:'white'}} >
                        <DataGrid rows={rows} columns={columns} pageSize={10} components={{
                            Toolbar: CustomToolbar,
                        }} />
                </div>
            </Paper>
        </div>
    );
};

Drivers.propTypes = {

};

function ActionButtons() {
    return (
        <>
            <IconButton color="secondary">
                <EditIcon fontSize="small"/>
            </IconButton>
            <IconButton color="secondary">
                <VisibilityIcon fontSize="small"/>
            </IconButton>
            <IconButton color="secondary">
                <DeleteIcon fontSize="small" />
            </IconButton >
        </>
    );
}

function CustomToolbar() {
    return (
        <GridToolbarContainer >
            <GridToolbarFilterButton color="secondary"/>
            <GridToolbarDensitySelector color={'secondary'} />
            <GridToolbarExport color={'secondary'}/>
        </GridToolbarContainer>
    );
}

export default Drivers;
