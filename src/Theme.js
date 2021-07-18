import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: {
            main:"#d69e47" ,
        },
        secondary: {
            main: "#260101",
        },
        background:{
            default: "#fff"
        },
        action:{
            hover: '#d69e47',
        }

    },
});

export default theme;