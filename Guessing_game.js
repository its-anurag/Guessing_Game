console.log("you have 4 guesses.Guesses1-10");
var a1=6
let readlinesync=require("readline-sync");
var a2=readlinesync.questio
for(i=0;i<4;i++){
    var a2=readlinesync.questionInt("what is your guess:");
    if(a2<a1){
        console.log("your guess is low ");
        
    }else if(a2>a1){
        console.log("your guess is high");
    }else if(a2==a1){
        console.log("your guess is correct");
        break;
    }else{
        console.log("try again");
    }
}
