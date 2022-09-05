import RoutesComp from './routes';
import {dataMock} from './components/Mock'
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './components/UI/StylesGeneral/index.styles.css'
import { lightTheme } from './components/UI/StylesGeneral/theme';
import { ThemeProvider } from 'styled-components'


const data = dataMock;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <RoutesComp data={data}/>
      <ToastContainer autoClose={4000} />
    </ThemeProvider> 
  );
}



export default App;
