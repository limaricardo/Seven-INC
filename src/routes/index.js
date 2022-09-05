import { Routes, Route, BrowserRouter } from "react-router-dom"
import Navbar from "../components/Navbar";
import AllEmployees from "../pages/AllEmployees";
import CreateEmployee from "../pages/CreateEmployee";
import EditEmployee from "../pages/EditEmployee";

const RoutesComp = ({data}) => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AllEmployees data={data}/>}></Route>
          <Route path="/create" element={<CreateEmployee />}></Route>
          <Route path="/edit/:id" element={<EditEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesComp;