let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = 33;

let runnerAge = 80;

if(runnerAge > 18 && earlyReg){
   raceNumber += 1000;
  
}

if(runnerAge > 18 && earlyReg){
  console.log(`No:${raceNumber}, Your race will start at 9:30am.`)
}
else if(runnerAge > 18 && !earlyReg){
  console.log(`No:${raceNumber}, Your race will star at 11:00am.`);
}

else if(runnerAge < 18){
  console.log(`No:${raceNumber}, Your race will start at 12:30pm.`)
}
else if(runnerAge === 18){
  console.log(`Speak to someone at the registraition desk.`)
}