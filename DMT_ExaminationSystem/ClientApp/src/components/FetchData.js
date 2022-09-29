import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { examinees: [], loading: true };
  }

  componentDidMount() {
    this.populateExamineeData();
  }

    static renderExamineesTable(examinees) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Examinee ID</th>
            <th>NIC No</th>
            <th>Avatar</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {examinees.map(examinee =>
              <tr key={examinee.examinee_id}>
                  <td>{examinee.examinee_id}</td>
                  <td>{examinee.nic_no}</td>
                  <td>{examinee.avatar}</td>
                  <td>{examinee.user_id}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderExamineesTable(this.state.examinees);

    return (
      <div>
        <h1 id="tabelLabel" >Examinee</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateExamineeData() {
      const response = await fetch('https://localhost:7233/Examinee');
      const data = await response.json();
      console.log('Resultsssssssssssss', response);
    this.setState({ examinees: data, loading: false });
  }
}
