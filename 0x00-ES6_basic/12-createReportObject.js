export default function createReportObject(employeesList) {
  // { Software: [ 'Bob', 'Sylvie' ] }
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(employeesList).length;
    },
  };
}
