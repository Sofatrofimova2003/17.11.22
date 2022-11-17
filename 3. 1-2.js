class Employee {
}



let user1 = new Employee;
let user2 = new Employee;


user1.name = 'john, 15000 $';
user2.name = 'eric, 25000 $';

user1.salary = 15000;
user2.salary = 25000;

console.log(user1.name);
console.log(user2.name);
console.log(user1.salary + user2.salary);