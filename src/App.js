import { ThemeProvider } from 'styled-components'
import { lightTheme } from './components/UI/StylesGeneral/theme';
import './components/UI/StylesGeneral/index.styles.css'
import RoutesComp from './routes';
import {dataMock} from './components/Mock'

const data = dataMock

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <RoutesComp data={data}/>
    </ThemeProvider> 
  );
}



export default App;
