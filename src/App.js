import { ThemeProvider } from 'styled-components'
import { lightTheme } from './components/UI/StylesGeneral/theme';
import './index.styles.css'

import CreateForm from './components/CreateForm'
import EditForm from './components/EditForm'
import EmployeeTable from '../src/pages/EmployeeTable'
import EditEmployeeForm from './components/EditEmployeeForm'



function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      {/* <div className="table-container">
        <EmployeeTable data={data} />
      </div> */}
      <CreateForm />
      <EditForm />
      {/* <EditEmployeeForm data={data}></EditEmployeeForm> */}
    </ThemeProvider> 
  );
}

const data = [{
  id: "",
  nome: "Ricardo",
  cpf: "",
  email: "ricardo@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},
{
  id: "",
  nome: "Daniel",
  cpf: "",
  email: "Daniel@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},
{
  id: "",
  nome: "Carlos",
  cpf: "",
  email: "Carlos@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},
{
  id: "",
  nome: "Lucas",
  cpf: "",
  email: "Lucas@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},{
  id: "",
  nome: "Romero",
  cpf: "",
  email: "Romero@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},{
  id: "",
  nome: "Pedro",
  cpf: "",
  email: "Pedro@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},{
  id: "",
  nome: "Marcos",
  cpf: "",
  email: "Marcos@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},{
  id: "",
  nome: "Lorenzo",
  cpf: "",
  email: "Lorenzo@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},{
  id: "",
  nome: "Maria",
  cpf: "",
  email: "Maria@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},{
  id: "",
  nome: "Ana",
  cpf: "",
  email: "Ana@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},{
  id: "",
  nome: "Julia",
  cpf: "",
  email: "Julia@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},{
  id: "",
  nome: "Amanda",
  cpf: "",
  email: "Amanda@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},{
  id: "",
  nome: "Matheus",
  cpf: "",
  email: "matheus@gmail.com",
  telefone: "24 99408-0484",
  dataNascimento: "",
  salario: "2500",
  contratacao: "12/06/1995"
},
]

export default App;
