const Engineer= require('./Engineer');

const engineer = new Engineer('chide', '2467', 'wet@yahoo.com', 'eng');

test('test to see if constructor can value for the engineer object' , ()=>{
    expect (engineer.name).toBe('chide');
    expect (engineer.id).toBe('2467');
    expect (engineer.email).toBe('wet@yahoo.com');
    expect (engineer.gituser).toEqual('eng');
});

test('test to see if we can get name from the getName method', ()=>{
    expect(engineer.getName()).toBe('chide');
});

test('test to see if we can get id from the getID method', ()=>{
    expect(engineer.getId()).toBe('2467');

});
test ('test to see if we can get email from the getEmail method',()=>{
    expect(engineer.getEmail()).toBe('wet@yahoo.com');
});
test('test to see if we can get user from the getUser method ', ()=>{
    expect(engineer.getGituser()).toEqual('eng');
});

test ('test if we can get the role from the getRole method',() =>{
    expect(engineer.getRole()).toBe('Engineer');
});