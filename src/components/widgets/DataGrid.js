import React from 'react';
import { makeData, Tips } from './DataUtils';

// Import React Table
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class DataGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[{
      columns: [{
        Header: 'Domain',
        accessor: 'domain'
      }, {
        Header: 'User',
        id: 'name',
        accessor: d => d.name
      }]
    }, {
      columns: [{
        Header: 'NT Account',
        accessor: 'ntaccount'        
      }, {
        Header: 'Last Logon',
        accessor: 'lastlogon',        
      },{
        Header: 'Created On',
        accessor: 'created',        
      },{
        Header: 'Account Expired',
        accessor: 'expired',        
      },{
        Header: 'Disabled',
        accessor: 'disabled',        
      }]
    }]}
          defaultPageSize={10}
          className="-striped -highlight"
          filterable
        />
        <br />
        <Tips />
      </div>
    );
  }
}
