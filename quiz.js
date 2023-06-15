var readlineSync = require ('readline-sync')

var userName = readlineSync.question("Please enter your name : ")

console.log("Welcome " +userName + " to Test your knowledge of Wizardry ! ")
console.log("-------------------------------------------")
var QuesOne = {
  question : "First Name of Dumbledore : ",
  answer : "Albus"
}

var QuesTwo = {
  question : "What is the name of the sport played in Hogwarts ? :",
  answer : "Quidditch"
}

var QuesThree = {
  question : "Which house was Draco Malfoy placed in ? :",
  answer : "Slytherin"
}

 var QuesFour = {
  question : "Who is the Half-Blood Prince? :",
  answer : "Snape"
}

 var QuesFive = {
  question : "What is Hermione’s patronus? :",
  answer : "Otter"
}
var score = 0; 

function quiz(question,answer){
  
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    score +=10 ;
    console.log("Correct Answer! 10 points to Gryffindor!  ")
  }
    
  else{
    console.log("Oops, Wrong Answer! ")
  }
  console.log("---------------------------------")
  console.log("Your score is ", score)
  
  if (score==30)
  {
    var unlock = readlineSync.question("Cast the unlock spell to enter to Level Two! :- ")
    if (unlock.toUpperCase()=== "ALOHOMORA")
    {
      secondLevel();
    }
  }
  
}

var levelOne = [QuesOne,QuesTwo,QuesThree]
play(levelOne)


function secondLevel(){
    var levelTwo = [QuesFour,QuesFive]  
    play(levelTwo)
    
   if (score == 50){
     console.log("Excellent! "+userName+" You are a True Wizard Indeed ! ")
   }  
  }

function play(arr){
   
   for (var y=0; y<arr.length;y++)
   {
    quiz(arr[y].question,arr[y].answer)
   }
}



