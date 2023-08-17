player1Name = localStorage.getItem("key1");
player2Name = localStorage.getItem("key2");

player1Score = 0;
player2Score = 0;

document.getElementById("player1_name").innerHTML = player1Name + " : ";
document.getElementById("player2_name").innerHTML = player2Name + " : ";

document.getElementById("player1_score").innerHTML = player1Score  ;
document.getElementById("player2_score").innerHTML = player2Score  ;

document.getElementById("player_question").innerHTML = "turno da pegunta - " +
player1Name ;

document.getElementById("player_answer").innerHTML = "turno da resposta - " +
player2Name ;

function enviar()
{
number1  = document.getElementById("number1").value;
number2  = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);

question_number = "<h4>"+ number1 +" x "+ number2 +"</h4>";
inputBox = "<br>Resposta : <input type='number' id='inputCheckBox'>";
checkButton = "<br><br><button class='btn btn-info' onclick='chek()'>Checar</button>";
row = question_number + inputBox + checkButton ;
document.getElementById("output").innerHTML = row;
 document.getElementById("number1").value = "";
 document.getElementById("number2").value = "";
}
questionTurn = "player1";
answerTurn = "player2";

function chek()
{
    getAnswer = document.getElementById("inputCheckBox").value;
    if(actual_answer == getAnswer)
    {
       if(answerTurn == "player1")
       {
        player1Score = player1Score +1;
        document.getElementById("player1_score").innerHTML = player1Score;
       }
       else
       {
        player2Score = player1Score +1;
        document.getElementById("player2_score").innerHTML = player2Score;
       }
    }
       if(questionTurn == "player1")
       {
       questionTurn = "player2";
        document.getElementById("player_question").innerHTML = "turno de pergunta- "+player2Name;
       }
       else
       {
        questionTurn = "player1"
        document.getElementById("player_question").innerHTML = "Turno da Pergunta - " + player1Name
       }
       if(answerTurn == "player1")
       {
       answerTurn = "player2"
       document.getElementById("player_answer").innerHTML = "turno de resposta - " + player2Name ;
       }
       else
       {
       answerTurn = "player1"
       document.getElementById("player_answer").innerHTML = "turno de resposta - " + player1Name ;
       }

       document.getElementById("output").innerHTML = "";
    }