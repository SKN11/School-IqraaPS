import Table from 'react-bootstrap/Table';

function DetailsTable() {
  return (
    <Table striped bordered hover>
        <thead>
        <tr>
          <th style={{backgroundColor:'#14A44D', color:'white'}}>S.No.</th>
          <th style={{backgroundColor:'#14A44D', color:'white'}}>Information</th>
          <th style={{backgroundColor:'#14A44D', color:'white'}}>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Principal</td>
          <td>MS.SHAHINA PARVEEN</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Total No. of Teachers</td>
          <td>23</td>
        </tr>
        <tr>
          <td>2a.&#10217;</td>
          <td>PGT</td>
          <td>08</td>
        </tr>
        <tr>
          <td>2b.&#10217;</td>
          <td>TGT</td>
          <td>05</td>
        </tr>
        <tr>
          <td>2c.&#10217;</td>
          <td>PRT</td>
          <td>09</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Teachers Section Ratio</td>
          <td>1.5:1</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Detail of Special Educator</td>
          <td>MR.SHAMIM AHMED (MBA)</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Detail of Counsellor and Wellness Teacher</td>
          <td>MR.ABID NADWI (M.A) SOCIOLOGY</td>
        </tr>        
      </tbody>
    </Table>
  );
}

export default DetailsTable;