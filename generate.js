const generateTeam = (team)=>{
  

const html=[];

const generateManager = manager =>{
    let managerHtml = `<div class ='container'>
    <div class ='Name'>${manager.name}</div>
    <div class ='other'>
        <ul>
            <li>${manager.id}</li>
            <li>${manager.email}</li>
            <li>${manager.number}</li>
        </ul>
    </div>
</div>`;
html.push(managerHtml);
}

const generateEngineer = engineer =>{
    let engineerHtml = `<div class ='container'>
    <div class ='Name'>${engineer.name}</div>

    <div class ='other'>
        <ul>
            <li>${engineer.id}</li>
            <li>${engineer.email}</li>
            <li>${engineer.gituser}</li>
        </ul>
    </div>
</div>`;
html.push(engineerHtml);
}

const generateIntern = intern =>{
    let internHtml = `<div class ='container'>
    <div class ='Name'>${intern.name}</div>
    <div class ='other'>
        <ul>
            <li>${intern.id}</li>
            <li>${intern.email}</li>
            <li>${intern.school}</li>
        </ul>
    </div>
</div>`;
html.push(internHtml);
}
console.log(team.length);
for (let i=0; i<team.length; i++){
    console.log(team[i])
    if (team[i].getRole()==="Manager"){
        generateManager(team[i]);
    }
    if (team[i].getRole()==="Engineer"){
        generateEngineer(team[i]);
    }
    if (team[i].getRole()==="Intern"){
        generateIntern(team[i]);
    }
}

 return html.join('');
}

module.exports =team =>{
    return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Team profile</title>
</head>
<body>
    <header>
        <h1> my team</h1>
    </header>
    <main>${generateTeam(team)}</main>
    </body>
    </html`;
}
