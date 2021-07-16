import './App.css';
import Routes from "./routes";
import theme from "./Theme";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';



function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
        <CssBaseline />
         <Routes/>
        </div>
    </ThemeProvider>
  );
}

export default App;
