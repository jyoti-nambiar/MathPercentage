

document.querySelector("button").addEventListener("click",randomNumber);

function randomNumber(){
    var randomnum=Math.round(Math.random()*100);
document.querySelector("h1").innerHTML="You are "+randomnum+"% perfect for each other";

    return randomnum;

}
