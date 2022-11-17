class Employee {
	show(name, surn) {
		return name + ' ' + surn;
	}
}

let user = new Employee;

console.log(user.show('Sema', '35000$'));