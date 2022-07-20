const Manager = require('./Manager');

const manager = new Manager('sola','623', 'mine@yahoo.com', '100');

test('test to see if constructor can get the value for the manager object', () =>{
    expect(manager.name).toBe('sola');
    expect(manager.id).toBe('623');
    expect(manager.email).toBe('mine@yahoo.com');
    expect(manager.number).toEqual('100');
});

test('test to see if we can get the name from the getName() method', ()=>{
    expect(manager.getName()).toBe('sola');
});

test('test to see if we can get the id from the getId() method', ()=>{
    expect(manager.getId()).toBe('623');
});

test('test to see if we can get the email from the getEmail() method', ()=>{
    expect(manager.getEmail()).toBe('mine@yahoo.com');
});
test('test to see if we can get the role from the getRole() method', ()=>{
    expect(manager.getRole()).toBe('Manager');
});
test('test to see if we can get the officenumber from the getNumber() method', ()=>{
    expect(manager.getNumber()).toEqual('100');
});