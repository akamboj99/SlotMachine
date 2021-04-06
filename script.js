let value1=document.getaelementById('value1')
let value2=document.getaelementById('value2')
let value3=document.getaelementById('value3')

let inpSpeed=document.getElementById('inpSpeed')

let values=[
    'A', 'B', 'C', 'D', 'E','F','G'
]

function getRandomValue(){
    return values[Math.floor(Math.random()*7)]
}

setInterval(()={
    value1.innerText=getRandomValue()
    value2.innerText=getRandomValue()
    value3.innerText=getRandomValue()
},100)

let animationId;
function updateAnimation(newSpeed){
    if(animationId) clearInterval((animationId)
        animationId=setInterval(()={
        value1.innerText=getRandomValue()
        value2.innerText=getRandomValue()
        value3.innerText=getRandomValue()
     },1000/newSpeed)
}

inpSpeed.onchange=function(){
    //console.log('value changed',ev.target.value)
    document.documentElement.style.setProperty('--speed',ev.target.value)
    updateAnimation(ev.target)
}


