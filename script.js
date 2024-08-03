const rps =['ROCK','PAPER','SCISSOR']
let humanScore=0,compscore=0;

function getComputerChoice(){
   let comSel = Math.floor(Math.random() * 3 );
   return rps[comSel];

}
function valHumanChoice(text_inp =''){
    return rps.includes(text_inp)
}
function getHumanChoice(){
   let  humanSel= prompt("Make your Choice.1st comes rock then scissor JANKENPO !!").toUpperCase();    
    while(!valHumanChoice(humanSel)){
        humanSel = prompt("Invalid choice, Think Hooman think !").toUpperCase();
    }
    return humanSel;
}
function rpslogic(opt1,opt2){
    if(opt1 === opt2) { 
        console.log("Draw !!");
        return 0;
    }

    if(opt1 ==='SCISSOR' && opt2==='PAPER'){
        console.log("HUMAN'S WIN"); 
        return 1;
    }
    if(opt1 ==='ROCK' && opt2==='SCISSOR'){
        console.log("HUMAN'S WIN");
         return 1;
        }
    if(opt1 ==='PAPER' && opt2==='ROCK'){
        console.log("HUMAN'S WIN"); 
        return 1;
    }

    if(opt1 ==='ROCK' && opt2==='PAPER'){
        console.log("COMPUTER WINS !!"); 
        return 2;
    }
    if(opt1 ==='PAPER' && opt2==='SCISSOR'){
        console.log("COMPUTER WINS !!"); 
        return 2;
    }
    if(opt1 ==='SCISSOR' && opt2==='ROCK'){
        console.log("COMPUTER WINS !!"); 
        return 2;
    }

}
function playRound() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log('computer Chose ' + computerSelection)
    console.log('Human Chose '+ humanSelection )
    let result = rpslogic(humanSelection,computerSelection);
    if(result === 0) {
        alert(" Draw ");
        console.log("Draw");
    }
    if(result === 1 ) {
        alert("round for Humans");
        console.log("round for Humans");
        humanScore ++;
    }
    if(result === 2 ) {
        alert("round for Machines");
        console.log("round for Humans")
        compscore++;
    }   

}
function game()  {
    let round = 0;
    while(round != 5){
        console.log('Round ' + round)
        playRound();
        console.log("Humans : " + humanScore +"Computers : " + compscore);
        round++;
    }
    if(humanScore > compscore) {
        console.log("All hail the humans !!");

    }
    else if(humanScore < compscore){
        console.log("we are doomed T_T T_T");
    }
    else{
        console.log("Fair competition Machines");
    }
}

game();
  