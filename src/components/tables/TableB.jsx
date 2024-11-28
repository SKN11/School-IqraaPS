  import Table from 'react-bootstrap/Table';
import React,{useContext} from 'react';
import { SchoolContext } from '../../store/school-site-context';
//import ReactDOM from 'react-dom';
//import MyDocument from '../pdfviewer/MyDocument';
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

function DetailsTable(props) {
  const schoolCtx = useContext(SchoolContext);
  
  const handleEyeClick = (selected) =>{
    schoolCtx.setChosenPDFAndName(selected);
  }

  return (
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{backgroundColor:'#14A44D', color:'white'}}>S.No.</th>
          <th style={{backgroundColor:'#14A44D', color:'white'}}>Documents and Information</th>
          <th style={{backgroundColor:'#14A44D', color:'white'}}>Documents</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Copies of Affiliation / Upgradation Letter and Recent Extension of Affiliation if any</td>
          <td><Link to="/affiltation.pdf"><FaEye onClick={handleEyeClick.bind(this, ["affiltation.pdf","Copies of Affiliation / Upgradation Letter and Recent Extension of Affiliation if any"])}/></Link></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Copies of Societies / Trust / Company Registration / Renewal Certificate as applicable</td>
          <td><Link to="/trust.pdf"><FaEye onClick={handleEyeClick.bind(this, ["trust.pdf","Copies of Societies / Trust / Company Registration / Renewal Certificate as applicable"])}/></Link></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt. / UT</td>
          <td><Link to="/noc.pdf"><FaEye onClick={handleEyeClick.bind(this, ["noc.pdf","Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt. / UT"])}/></Link></td>
        </tr>
        <tr>
          <td>4</td>
          <td>Copies of Recognition Certificate under RTE Act, 2009, and its renewal if applicable</td>
          <td><Link to="/recognition.pdf"><FaEye onClick={handleEyeClick.bind(this, ["noc.pdf","Copies of Recognition Certificate under RTE Act, 2009, and its renewal if applicable"])}/></Link></td>
        </tr>
        <tr>
          <td>5</td>
          <td>Copy of valid building safety certificate as per the National Building Code</td>
          <td><Link to="/building.pdf"><FaEye onClick={handleEyeClick.bind(this, ["building.pdf","Copy of valid building safety certificate as per the National Building Code"])}/></Link></td>
        </tr>
        <tr>
          <td>6</td>
          <td>Copy of valid fire safety certificate issued by the competent authority</td>
          <td><Link to="/firecertificate.pdf"><FaEye onClick={handleEyeClick.bind(this, ["firecertificate.pdf","Copy of valid fire safety certificate issued by the competent authority"])}/></Link></td>
        </tr>
        <tr>
          <td>7</td>
          <td>Copy of the DEO certificate submitted by the school for affiliation / upgradation / extension of affiliation or self-certification by the school</td>
          <td><Link to="/selfcertificate.pdf"><FaEye onClick={handleEyeClick.bind(this, ["selfcertificate.pdf","Copy of the DEO certificate submitted by the school for affiliation / upgradation / extension of affiliation or self-certification by the school"])}/></Link></td>
        </tr>
        <tr>
          <td>8</td>
          <td>Copies of valid water, health, and sanitation certificates</td>
          <td><Link to="/waterhealth.pdf"><FaEye onClick={handleEyeClick.bind(this, ["waterhealth.pdf","Copies of valid water, health, and sanitation certificates"])}/></Link></td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}

export default DetailsTable;