/*$(function() {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const employeesJson =

    $('#employee-table').DataTable({
        data: employees,
        columns: [
            { title: 'First Name', data: 'firstName' },
            { title: 'Last Name', data: 'lastName' },
            { title: 'Start Date', data: 'startDate' },
            { title: 'Department', data: 'department' },
            { title: 'Date of Birth', data: 'dateOfBirth' },
            { title: 'Street', data: 'street' },
            { title: 'City', data: 'city' },
            { title: 'State', data: 'state' },
            { title: 'Zip Code', data: 'zipCode' },
        ]
    });
});
*/
$(document).ready(function() {
    let employees = JSON.parse(localStorage.getItem('employees'));
    if (!employees) {
        fetch('./Employees.json')
            .then(response => response.json())
            .then(employeesJsonData => {
                employees = employeesJsonData;
                localStorage.setItem('employees', JSON.stringify(employees));
                initDataTable(employees);
            });
    } else {
        initDataTable(employees);
    }
});

function initDataTable(employees) {
    $('#employee-table').DataTable({
        data: employees,
        columns: [
            { title: 'First Name', data: 'firstName' },
            { title: 'Last Name', data: 'lastName' },
            { title: 'Start Date', data: 'startDate' },
            { title: 'Department', data: 'department' },
            { title: 'Date of Birth', data: 'birthDate' },
            { title: 'Street', data: 'street' },
            { title: 'City', data: 'city' },
            { title: 'State', data: 'countryState' },
            { title: 'Zip Code', data: 'zipCode' },
        ]
    });
}
