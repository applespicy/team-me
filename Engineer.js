const Employee= require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, gituser){
        super(name, id, email);

        this.gituser = gituser  ;

    }

    getGituser(){
        return this.gituser;
    }

    getRole(){
        return "Engineer";
    }
   
}

module.exports = Engineer;