import Table from 'react-bootstrap/Table';

function DetailsTable() {
  //3366ff
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{backgroundColor:'#14A44D', color:'white'}}>Information</th>
          <th style={{backgroundColor:'#14A44D', color:'white'}}>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name of the School</td>
          <td>Iqraa Public School</td>
        </tr>
        <tr>
          <td>Affiliation Number</td>
          <td>531461</td>
        </tr>
        <tr>
          <td>School Code</td>
          <td>41441</td>
        </tr>
        <tr>
          <td>Complete Address with Pincode</td>
          <td>V P O FATEHPUR TAGA, FARIDABAD, HARYANA - 121004</td>
        </tr>
        <tr>
          <td>Principal Name </td>
          <td>MS . SHAHINA PARVEEN</td>
        </tr>
        <tr>
          <td>Qualification</td>
          <td>M.A,B.ed</td>
        </tr>
        <tr>
          <td>School Email ID</td>
          <td>41441@cbseshiksha.in</td>
        </tr>
        <tr>
          <td>Contact Details Number</td>
          <td>9999241786</td>
        </tr>
        {/* <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  );
}

export default DetailsTable;