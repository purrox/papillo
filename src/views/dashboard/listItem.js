import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LineWeightIcon from '@material-ui/icons/LineWeight';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ContactsIcon from '@material-ui/icons/Contacts';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Choferes" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Clientes" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LineWeightIcon />
            </ListItemIcon>
            <ListItemText primary="Kilos" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary="Fletes" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Reportes" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Ultimos reportes</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Fletes ultimo mes" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Kilos Agregados" />
        </ListItem>
    </div>
);