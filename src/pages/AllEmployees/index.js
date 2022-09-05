import React from 'react'
import EmployeeTable from '../../components/EmployeeTable';
import { TableContainer } from './styles';

const AllEmployees = ({data}) => {
  return (
    <div>
      <TableContainer>
        <EmployeeTable data={data} />
      </TableContainer> 
    </div>
  );
};

export default AllEmployees;