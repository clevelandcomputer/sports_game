// Clicking either "SHOOT" button represents a shot for that team.
// Shots should have a random chance of succeeding or failing. (Sounds like Internet research time! How do you determine a random chance in JavaScript?)
// The number of shots taken should increase for every click of the "SHOOT" button.
// The number of goals should only increase when the shot is successful.
// Clicking the "RESET" button should reset all the shot and goal counters and add 1 to the number of resets.



// Bonus
// Play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element and how to use it in JS. You will also need to find a sound file to use.
// Use what you know about HTML and CSS to make the page look better!
// Upon reset, display who won the game.
let count = 0;
const teamone_numshots = document.querySelector("#teamone-numshots")
const teamone_shoot_button = document.querySelector("#teamone-shoot-button");


let goals = 0;
const teamone_numgoals = document.querySelector("#teamone-numgoals")
const shotlog = document.querySelector(".shotlog");
 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

teamone_shoot_button.addEventListener("click", async function(){
        count = parseInt(teamone_numshots.innerHTML) + 1;
        teamone_numshots.innerHTML = count;
        teamone_shoot_button.disabled = true;
        reset_button.disabled = true;
        var buzzer = new Audio('assets/audio/buzzer.mp3');
            buzzer.play();
            console.log(document.querySelector(".left h2").innerText + "\'s " + "Half Court Shot")
            
            shotlog.innerText = shotlog.innerText + "\n" + document.querySelector(".left h2").innerText + "\'s " + "Half Court Shot";
            
            await sleep(2000);
            const rand = Math.random();
        if (rand < 0.5) {
            goals = parseInt(teamone_numgoals.innerHTML) + 3;
            teamone_numgoals.innerHTML = goals;
            var swiss = new Audio('assets/audio/Basketball-Swish.mp3');
            swiss.play();
            console.log(document.querySelector(".left h2").innerText + " Scored")
            console.log(rand);
            shotlog.innerText = shotlog.innerText + "\n" + document.querySelector(".left h2").innerText + " Scored";
            teamone_shoot_button.disabled = false;
            reset_button.disabled = false;
        } else {
            var miss = new Audio('assets/audio/Basketball-Rim.mp3');
            miss.play();
            console.log(document.querySelector(".left h2").innerText + " Missed")
            console.log(rand);
            shotlog.innerText = shotlog.innerText + "\n" + document.querySelector(".left h2").innerText + " Missed";
            teamone_shoot_button.disabled = false;
            reset_button.disabled = false;
        }

})

let count2 = 0;
const teamtwo_numshots = document.querySelector("#teamtwo-numshots")
const teamtwo_shoot_button = document.querySelector("#teamtwo-shoot-button");
let goals2 = 0;
const teamtwo_numgoals = document.querySelector("#teamtwo-numgoals")
 
teamtwo_shoot_button.addEventListener("click", async function(){
        count2 = parseInt(teamtwo_numshots.innerHTML) + 1;
        teamtwo_numshots.innerHTML = count2;
        teamtwo_shoot_button.disabled = true;
        reset_button.disabled = true;
        var buzzer = new Audio('assets/audio/buzzer.mp3');
        buzzer.play();
        console.log(document.querySelector(".right h2").innerText + "\'s " + "Half Court Shot")
        shotlog.innerText = shotlog.innerText + "\n" + document.querySelector(".right h2").innerText + "\'s " + "Half Court Shot";
        await sleep(2000);
        const rand2 = Math.random();
        if (rand2 < 0.5){
            goals2 = parseInt(teamtwo_numgoals.innerHTML) + 3;
            teamtwo_numgoals.innerHTML = goals2;
            var swiss = new Audio('assets/audio/Basketball-Swish.mp3');
            swiss.play();
            console.log(document.querySelector(".right h2").innerText + " Scored")
            console.log(rand2);
            shotlog.innerText = shotlog.innerText + "\n" + document.querySelector(".right h2").innerText + " Scored";
            teamtwo_shoot_button.disabled = false;
            reset_button.disabled = false;
        } else {
            var miss = new Audio('assets/audio/Basketball-Rim.mp3');
            miss.play();
            console.log(document.querySelector(".right h2").innerText + " Missed")
            console.log(rand2);
            shotlog.innerText = shotlog.innerText + "\n" + document.querySelector(".right h2").innerText + " Missed";
            teamtwo_shoot_button.disabled = false;
            reset_button.disabled = false;
        }

})

let reset_count = 0;
const reset_button = document.querySelector("#reset-button")
const num_resets = document.querySelector("#num-resets")
const winner = document.querySelector("#winner");
const countdownVar = document.querySelector("#countdown");
const countdownMessage = document.querySelector("#countdown-message");



reset_button.addEventListener("click", async function(){
    if (parseInt(teamone_numgoals.innerText) || parseInt(teamone_numshots.innerText) || parseInt(teamtwo_numgoals.innerText) || parseInt(teamtwo_numshots.innerText) > 0) {
        reset_count = parseInt(num_resets.innerHTML) + 1;
        num_resets.innerHTML = reset_count; 
        countdownVar.innerText = 5;
        teamtwo_shoot_button.disabled = true;
        teamone_shoot_button.disabled = true;
        reset_button.disabled = true;
        var seconds = document.querySelector("#countdown").innerText;
        var countdown = setInterval(function() {
            seconds--;
            document.querySelector("#countdown").innerText = seconds;
            if (seconds <= 0) clearInterval(countdown);
        }, 1000);

        if (parseInt(teamone_numgoals.innerText) > parseInt(teamtwo_numgoals.innerText) ) 
            { 
              
            winner.innerText = document.querySelector(".left h2").innerText + " Wins By "  + (parseInt(teamone_numgoals.innerText) - parseInt(teamtwo_numgoals.innerText)) ;
            
           
            
            countdownVar.style.display = "block";
            countdownMessage.style.display = "block";
            await sleep(5000);
            countdownVar.style.display = "none";
            countdownMessage.style.display = "none";
            // await sleep(4000);
            teamone_numgoals.innerText = 0;
            teamone_numshots.innerText = 0;
            teamtwo_numshots.innerText = 0;
            teamtwo_numgoals.innerText = 0;
            shotlog.innerText = "";
            winner.innerText = "";
            teamtwo_shoot_button.disabled = false;
            teamone_shoot_button.disabled = false;
            reset_button.disabled = false;
            
            
        } else if (parseInt(teamtwo_numgoals.innerText) > parseInt(teamone_numgoals.innerText)) {
            winner.innerText = document.querySelector(".right h2").innerText + " Wins By "  + (parseInt(teamtwo_numgoals.innerText) - parseInt(teamone_numgoals.innerText)) ;
           
            countdownVar.style.display = "block";
            countdownMessage.style.display = "block";
            await sleep(5000);
            countdownVar.style.display = "none";
            countdownMessage.style.display = "none";
            // await sleep(4000);
            teamone_numgoals.innerText = 0;
            teamone_numshots.innerText = 0;
            teamtwo_numshots.innerText = 0;
            teamtwo_numgoals.innerText = 0;
            shotlog.innerText = "";
            winner.innerText = "";
            teamtwo_shoot_button.disabled = false;
            teamone_shoot_button.disabled = false;
            reset_button.disabled = false;
            
        } else if (parseInt(teamtwo_numgoals.innerText) === parseInt(teamone_numgoals.innerText)) {
            winner.innerText = "Tie Game!";        } 
            await sleep(4000);
            teamone_numgoals.innerText = 0;
            teamone_numshots.innerText = 0;
            teamtwo_numshots.innerText = 0;
            teamtwo_numgoals.innerText = 0;
            shotlog.innerText = "";
            winner.innerText = "";
            teamtwo_shoot_button.disabled = false;
            teamone_shoot_button.disabled = false;
            reset_button.disabled = false;
        
        console.log ("Team Scores Reset By User")
    } else {        
        alert("A game has not been played")
        console.log ("Take a buzzer shot to reset game.")

    }
   
      

})

// using keys to shoot

document.onkeydown = function(event) {
    switch (event.keyCode) {
       case 37:

            document.getElementById("teamone-shoot-button").click(); 
          break;
       case 38:
        
        document.getElementById("reset-button").click(); 
          break;
       case 39:
        document.getElementById("teamtwo-shoot-button").click(); 
          break;
       case 40:
        var teamoneName = prompt("What would you like to name Team 1?", "Team 1");
        var teamtwoName = prompt("What would you like to name Team 2", "Team 2");
        var overwriteTeamone = document.querySelector(".left h2");
        overwriteTeamone.innerText = teamoneName;
        var overwriteTeamtwo = document.querySelector(".right h2");
        overwriteTeamtwo.innerText = teamtwoName;
          break;
    }
};