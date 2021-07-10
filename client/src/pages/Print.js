import React, { Component } from 'react';

class PrintThisComponent extends Component {
  render() {
    return (

      <div>
      <button  className="btn btn-outline-secondary btn-m"
         onClick={() => window.print()}>PRINT</button>
       
        
      </div>
    )
  }
}
export default PrintThisComponent;