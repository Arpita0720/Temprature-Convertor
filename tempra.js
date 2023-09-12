let CelciusInput = document.querySelector('#Celcius > input')
let FahrenheitInput = document.querySelector('#Fehrenheit > input')
let KelvinInput = document.querySelector('#Kelvin > input')
let btn=document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

CelciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(CelciusInput.value)
    let FTemp = (cTemp*(9/5)) + 32
    let KTemp = cTemp + 273.15

    FahrenheitInput.value = roundNumber(FTemp)
    KelvinInput.value = roundNumber(KTemp)
})

FahrenheitInput.addEventListener('input', function(){
    let FTemp = parseFloat(FahrenheitInput.value)
    let CTemp = (FTemp - 32)*(5/9)
    let KTemp = (FTemp - 32)*(5/9)+273.15

    CelciusInput.value = roundNumber(CTemp)
    KelvinInput.value = roundNumber(KTemp)
})

KelvinInput.addEventListener('input', function(){
    let KTemp = parseFloat(KelvinInput.value)
    let CTemp = (KTemp - 273.15)
    let FTemp = (KTemp - 273.15)*(9/5)+32

    CelciusInput.value = roundNumber(CTemp)
    FahrenheitInput.value = roundNumber(FTemp)
})

btn.addEventListener('click',()=>{
    CelciusInput.value=""
    FahrenheitInput.value=""
    KelvinInput.value=""

})