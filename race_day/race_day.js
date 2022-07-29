let raceNumber = Math.floor(Math.random() * 1000);
const earlyRunner = true;
const runnerAge = 18;

if (earlyRunner && runnerAge >= 18)
  raceNumber += 1000


if (earlyRunner && runnerAge >= 18) {  
  console.log(`You are an early racer, the race will begin at 9:30am and your Race Number is ${raceNumber}`);
} else if (earlyRunner === false && runnerAge >= 18) {
  console.log(`The runner is over 18 AND did not register early, they will race at 11:00am with the Race Number ${raceNumber}`);
}

if (runnerAge < 18)
  console.log(`Youth runners will begin at 12:30pm. Your Race Number is ${raceNumber}`)