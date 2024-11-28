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
          <td>Total Campus Area of the School (in square meters)</td>
          <td>9004</td>
        </tr>
        <tr>
          <td>2</td>
          <td>No. and Size of the Classrooms (in square feet / meters)</td>
          <td>17 & 46</td>
        </tr>
        <tr>
          <td>3</td>
          <td>No. and Size of Laboratories Including Computer Labs (in square feet / meters)</td>
          <td>6 & 56</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Internet Facility</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>5</td>
          <td>No. of Girls Toilets</td>
          <td>6</td>
        </tr>
        <tr>
          <td>6</td>
          <td>No. of Boys Toilets</td>
          <td>6</td>
        </tr>    
        <tr>
          <td>7</td>
          <td>Link to Audit Report of the School Infrastructure</td>
          <td><a href="https://www.youtube.com/watch?v=KwOQrogq12U" class="doc-link">Click To Watch</a></td>
        </tr>    

      </tbody>
    </Table>
  );
}

export default DetailsTable;