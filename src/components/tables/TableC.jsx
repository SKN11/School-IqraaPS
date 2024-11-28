import Table from 'react-bootstrap/Table';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SchoolContext } from '../../store/school-site-context';

function DetailsTable(props) {

  const schoolCtx = useContext(SchoolContext);

  const handleEyeClick = (selected) =>{
    schoolCtx.setChosenPDFAndName(selected);
  }


  return (
    <Table striped bordered hover>
       <thead>
        <tr>
          <th style={{backgroundColor:'#14A44D', color:'white'}}>S.No.</th>
          <th style={{backgroundColor:'#14A44D', color:'white'}}>Documents and Information</th>
          <th style={{backgroundColor:'#14A44D', color:'white'}}>Upload Documents</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Fee Structure of the School</td>
          <td><Link to="/fee.pdf"><FaEye onClick={handleEyeClick.bind(this, ["fee.pdf","Fee Structure of the School"])}/></Link></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Annual Academic Calendar</td>
          <td><Link to="/academic.pdf"><FaEye onClick={handleEyeClick.bind(this, ["academic.pdf","Annual Academic Calendar"])}/></Link></td>
        </tr>
        <tr>
          <td>3</td>
          <td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
          <td><Link to="/smc.pdf"><FaEye onClick={handleEyeClick.bind(this, ["smc.pdf","LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)"])}/></Link></td>
        </tr>
        <tr>
          <td>4</td>
          <td>List of Parents Teachers Association (PTA) Members</td>
          <td><Link to="/pta.pdf"><FaEye onClick={handleEyeClick.bind(this, ["pta.pdf","List of Parents Teachers Association (PTA) Members"])}/></Link></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Last three-year result of the Board Examination as per applicability</td>
          <td><Link to="/result.pdf"><FaEye onClick={handleEyeClick.bind(this, ["result.pdf","Last three-year result of the Board Examination as per applicability"])}/></Link></td>
        </tr>        
      </tbody>
    </Table>
  );
}

export default DetailsTable;