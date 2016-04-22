export function addEmployee(employee) {
    return {
        type: 'ADD_EMPLOYEE',
        payload: employee
    }
}