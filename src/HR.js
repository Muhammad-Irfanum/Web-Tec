import { Component } from 'react';

class HR extends Component {
  state = {
    slaray: '0',
  };

  handleSalary = () => {
    this.setState({ slaray: '100000' });
  };

  render() {
    return (
      <div>
        <h1>This is an HR console. </h1>
        <h2>Salary for this month {this.state.slaray}</h2>
        <button onClick={this.handleSalary}>Calculate Salary</button>
      </div>
    );
  }
}

export default HR;
