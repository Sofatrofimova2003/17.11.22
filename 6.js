class Employee {
	show() {
		console.log(this.name);
		console.log(this.salary);
	}
}
let user = new Employee;

user.name = 'john';
user.salary = '15000';

user.show();

