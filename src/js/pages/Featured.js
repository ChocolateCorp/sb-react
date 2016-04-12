import React from 'react';
import AddEmployee from '../components/AddEmployee';

class Featured extends React.Component {

    showHideAdd() {
        this.props.toggleShowAdd();
    }
    render() {
        let addButton = {
            className: (this.props.showAddBox) ? "btn btn-primary btn-block" : "btn btn-success btn-block",
            text: (this.props.showAddBox) ? "Cancel" : "Add New Item"
        }
        let employees = this.props.employees.map((employee) => <div>{employee.name}, {employee.age}, {employee.designation}</div>);
        return <div>
            <AddEmployee show={this.props.showAddBox} addEmployee={this.props.addEmployee} />
            <br />
            <button className={addButton.className} onClick={() => this.showHideAdd()}>{addButton.text}</button>
            {employees}
        </div>
    }
}

export default Featured;