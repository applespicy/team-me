const Intern = require('./Intern');

const intern = new Intern( 'bum', '789', 'cat@msn.com', 'Georgiatech' );

test('test to see if the constrcutor can get value for the intern object', () => {
    expect(intern.name).toBe('bum');
    expect(intern.id).toBe('789');
    expect(intern.email).toBe('cat@msn.com');
    expect(intern.school).toEqual('Georgiatech');
});

test('test if we can get the name from the getName method', () => {
    expect(intern.getName()).toBe('bum');
});

test('test if we can get the id from the getId method',()=>{
    expect(intern.getId()).toBe('789');
});

test('test if we can get the email from the getEmail method', ()=>{
    expect(intern.getEmail()).toBe('cat@msn.com');
});

test('test if we can get the school from the getSchool method', ()=>{
    expect(intern.getSchool()).toEqual('Georgiatech');

});

test ('test if we can get the role from the getRole method',() =>{
    expect(intern.getRole()).toEqual('Intern');
});