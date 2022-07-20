const Employee = require('./Employee');

const employee = new Employee('rich','123', 'dat@yahoo.com');

test('test to see if constructor can get the value for the employee object', () =>{
    expect(employee.name).toBe('rich');
    expect(employee.id).toBe('123');
    expect(employee.email).toEqual('dat@yahoo.com');
});

test('test to see if we can get the name from the getName() method', ()=>{
    expect(employee.getName()).toBe('rich');
});

test('test to see if we can get the id from the getId() method', ()=>{
    expect(employee.getId()).toBe('123');
});

test('test to see if we can get the email from the getEmail() method', ()=>{
    expect(employee.getEmail()).toBe('dat@yahoo.com');
});
test('test to see if we can get the role from the getRole() method', ()=>{
    expect(employee.getRole()).toBe('Employee');
});
