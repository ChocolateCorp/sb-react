import React from 'react';
import AddEmployee from '../components/AddEmployee';
import Employee from '../components/EmployeeCard';

class Featured extends React.Component {

    showHideAdd() {
        this.props.toggleShowAdd();
    }
    render() {
        let addButton = {
            className: (this.props.showAddBox) ? "btn btn-primary btn-block" : "btn btn-success btn-block",
            text: (this.props.showAddBox) ? "Cancel" : "Add New Item"
        }
        let employees = this.props.employees.map((employee) => <Employee key={employee.id} employee={employee} />);
        return <div>
            <AddEmployee show={this.props.showAddBox} addEmployee={this.props.addEmployee} />
            <br />
            <button className={addButton.className} onClick={() => this.showHideAdd()}>{addButton.text}</button>
            <div class="row">{employees}</div>
        </div>
    }
}

export default Featured;