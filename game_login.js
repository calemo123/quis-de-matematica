function addUser()
{
player_1=document.getElementById("input1").value;

player_2=document.getElementById("input2").value;

localStorage.setItem("key1",player_1);

localStorage.setItem("key2",player_2);

window.location="gamePage.html";
}