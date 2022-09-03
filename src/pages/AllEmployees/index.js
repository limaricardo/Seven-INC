import React from 'react'
import EmployeeTable from '../../components/EmployeeTable';
import Navbar from '../../components/Navbar';
import { TableContainer } from './styles';

const AllEmployees = ({data}) => {
  return (
    <div>
      <Navbar />
      <TableContainer>
        <EmployeeTable data={data} />
      </TableContainer> 
    </div>
  );
};

export default AllEmployees;