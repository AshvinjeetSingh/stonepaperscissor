// variable declaration

var scissor=document.getElementById("scissor")
var stone=document.getElementById("rock")
var paper=document.getElementById("paper")
var result =document.getElementById("result");
var userScore=0;
var compScore=0;
let convertedChoice;
let userInput;
let computerInput;
var userScoreSpan=document.querySelector(".user_score span")
var compScoreSpan=document.querySelector(".comp_score span")
var userchoice=document.querySelector(".user_choice span");
var compchoice=document.querySelector(".comp_choice span");


// Random INput from Computer
computerInputfnc=()=>
{
    let computerInput;
    arr=["s","r","p"]
    var num=Math.floor(Math.random() * 3);
    computerInput=arr[num];
    console.log(computerInput)
    return computerInput;
}
function outputfnc(userInput,computerInput)
{
    var output=userInput+computerInput;
    switch (output) {
    case "sp":
    case "rs":
    case "pr":
        console.log("user Wins");
        userScore++;
        userScoreSpan.innerHTML=userScore
        result.innerHTML="user Wins";
        console.log(userScore)
        break;
    case "ps":
    case "sr":
    case "rp":
        console.log("user loses");
        compScore++;
        compScoreSpan.innerHTML=compScore
        console.log(compScore)
        result.innerHTML="user Loses";
        break;
    case "ss":
    case "rr":
    case "pp":
        console.log("Draw");
        result.innerHTML="Draw";
        break;
}
}    





scissor.addEventListener("click",()=>
{
    userInput="s";
    console.log(userInput)
    const cinput=computerInputfnc();
    console.log(cinput)
    outputfnc(userInput,cinput);
    console.log(covertToWord(userInput));
    userchoice.innerHTML=covertToWord(userInput);
    compchoice.innerHTML=covertToWord(cinput);
})

stone.addEventListener("click",()=>
{
    userInput="r";
    console.log(userInput)
    const cinput=computerInputfnc();
    console.log(cinput)
    outputfnc(userInput,cinput);
    console.log(covertToWord(userInput));
    userchoice.innerHTML=covertToWord(userInput);
    compchoice.innerHTML=covertToWord(cinput);
})


paper.addEventListener("click",()=>
{
    userInput="p";
    console.log(userInput)
    const cinput=computerInputfnc();
    console.log(cinput)
    outputfnc(userInput,cinput);
    console.log(covertToWord(userInput));
    userchoice.innerHTML=covertToWord(userInput);
    compchoice.innerHTML=covertToWord(cinput);
})

covertToWord=(userInput)=>
{
    if(userInput=="p")
    {
        convertedChoice="paper" 
    }
    if(userInput=="s")
    {
        convertedChoice="scissor" 
    }
    if(userInput=="r")
    {
        convertedChoice="rock" 
    }

    return convertedChoice;
    
}