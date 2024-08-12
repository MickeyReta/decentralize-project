const colors=["red", "green", "yellow", "blue" ];
const btn=document.getElementById('btn');
const color =document.querySelector('.color');
 

    btn.addEventListener("click", function (){

const random=getrandomnumber();
color.textContent=colors[random];
document.body.style.backgroundColor=colors[random];
    })
    function getrandomnumber(){
        return Math.floor(Math.random()*colors.length)

    }

