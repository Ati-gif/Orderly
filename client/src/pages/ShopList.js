import React from 'react';
import { Table, Button, CustomInput  } from 'reactstrap';

const ShopList = (props) => {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Products</th>
          <th>Room </th>
          <th>Category</th>
          <th>Running Low</th>
          <th>Need</th>
          <th>Edit Rooms and Categories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td><CustomInput type="checkbox" id="exampleCustomCheckbox"/>Table cell</td>
          <td><CustomInput type="checkbox" id="exampleCustomCheckbox"/>Table cell</td>
          <td><Button outline color="danger">delete</Button><Button outline color="success">edit</Button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td><CustomInput type="checkbox" id="exampleCustomCheckbox"/>Table cell</td>
          <td><CustomInput type="checkbox" id="exampleCustomCheckbox"/>Table cell</td>
          <td><Button outline color="danger">delete</Button><Button outline color="success">edit</Button></td>
        </tr>
        
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td><CustomInput type="checkbox" id="exampleCustomCheckbox"/>Table cell</td>
          <td><CustomInput type="checkbox" id="exampleCustomCheckbox"/>Table cell</td>
          <td><Button outline color="danger">delete</Button><Button outline color="success">edit</Button></td>
        </tr>
      </tbody>
    </Table>
  );
}
export default ShopList;
