app.service('EmployeeService',[function(){
	var _this = this;

	_this.employeeList = [];

	var isEdit = {
		on:false,
		index:null
	};

	_this.addEmployee = function(event){
		event.preventDefault();
		var newRecord = angular.copy(this.employeeRecord);

		if(!isEdit.on) _this.employeeList.push( newRecord )
		else _this.employeeList.splice(isEdit.index,1, newRecord )

		this.toggleForm();
		this.employeeRecord = {};
	}

	_this.editEmployee = function(index){
		isEdit.on = true;
		isEdit.index = index;
		this.toggleForm();

		this.employeeRecord = angular.copy(_this.employeeList[index]);
	}

	_this.calculateTax = function(){
		var grossSalary = this.employeeRecord.grossSalary;
		//console.log(grossSalary);
		var investment = this.employeeRecord.investment > 150000 ? 150000 : this.employeeRecord.investment;

		var taxableIncome = payTaxOn = grossSalary < 250000 ? 0 : (grossSalary - 250000 - investment);

		var taxPayable = 0;

		if(taxableIncome){
			if(grossSalary > 500000){
				taxPayable += (500000 - 250000) * 0.05
				taxableIncome -= 250000;
				if(grossSalary > 1000000){
					taxPayable += (1000000 - 500000) * 0.2
					taxableIncome -= 500000;
					taxPayable += (taxableIncome) * 0.3
				}else{
					taxPayable += (taxableIncome) * 0.2
				}
			}else{
				taxPayable += (taxableIncome) * 0.05
			}
		}

		this.employeeRecord.taxableIncome = payTaxOn;
		this.employeeRecord.taxPayable = taxPayable;


	}
}]);