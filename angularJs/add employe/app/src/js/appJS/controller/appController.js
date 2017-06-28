app.controller('employeeController',['EmployeeService',function(EmployeeService){
	var _this = this;
	
	_this.employeeRecord = {};
	_this.showForm = false;

	_this.employeeList = EmployeeService.employeeList;

	_this.addEmployee = EmployeeService.addEmployee.bind(_this);

	_this.editEmployee = EmployeeService.editEmployee.bind(_this);
	
	_this.calculateTax = EmployeeService.calculateTax.bind(_this);

	_this.toggleForm = function(){
		_this.employeeRecord = {};
		_this.showForm = _this.showForm ? false : true;
	}
}]);