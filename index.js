const inquirer = require('inquirer');
const fs = require('fs');


const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generateSite = require('./generate.js');

const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputpath = path.join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'who is the manager of this team?',
            validate: nameinput => {
                if (nameinput) {
                    return true;
                } else {
                    console.log('please enter manager name');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('please enter your id');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('please enter your email address');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'number',
            message: 'Enter your office number',
            validate: number => {
                if (number) {
                    return true;
                } else {
                    console.log('please enter your office number');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.number);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'please select which optionyou would like to continue with',
            choices: ['add an intern', 'add an engineer', 'finish building my team']
        }
    ]).then(userChoice => {
        switch (userChoice.menu) {
            case "add an engineer":
                promptEngineer();
                break;
            case "add an intern":
                promptIntern();
                break;
            default: buildTeam();

        }
    });
};
const promptEngineer = () => {
    console.log('Add a new Engineer');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of the engineer',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('please enter the name of engineer');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter your email',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('please enter your email address');
                    return false;
                }
            }

        },

        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('please enter your id');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'user',
            message: 'Enter your Github Username',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('please enter your username');
                    return false;
                }
            }

        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Engineer(answers.name, answers.id, answers.email, answers.user);
        teamMembers.push(intern);
        promptMenu();
    })
};
const promptIntern = () => {
    console.log('Add a new intern');

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of the intern',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('please enter the name of intern');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('please enter your email address');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'Enter your id',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('please enter your id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter your school name',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('please enter your school name');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};

const buildTeam =()=>{
    console.log('finished building my team!');  

    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputpath, generateSite(teamMembers),"utf-8");
}

promptManager();






