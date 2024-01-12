const numbersDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");

const lotterynumbers = [];
const colors = ["tomato","orange","gold","lime","blue", "navy", "purple"];

function paintNumber(number)
{
    const eachNumDiv = document.createElement("div")
    let colorIndex = Math.floor(number /10);
    eachNumDiv.classList.add('eachNum');
    eachNumDiv.style.backgroundColor = colors[colorIndex];
    eachNumDiv.textContent = number;
    numbersDiv.appendChild(eachNumDiv);
}


drawButton.addEventListener("click",function(){
    while(lotterynumbers.length < 6)
    {
        let ran = Math.floor(Math.random()*69) + 1;
        if(lotterynumbers.indexOf(ran) === -1)
        {
            lotterynumbers.push(ran);
            paintNumber(ran)
        }
    }
    
})

resetButton.addEventListener("click",function(){
    lotterynumbers.splice(0,6);
    numbersDiv.innerHTML = "";
})

