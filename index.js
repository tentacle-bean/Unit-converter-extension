/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("input-slot")
const convBtn = document.getElementById("conv-btn")
const lengthVal = document.getElementById("length-val")
const volumeVal = document.getElementById("volume-val")
const massVal = document.getElementById("mass-val")
const storage = localStorage.getItem("prev")

if(storage){
    let num = Number(storage)
    input.value = num
    printLength(num)
    printVolume(num)
    printMass(num)
}

convBtn.addEventListener("click", function(){
    val = Number(input.value)
    let num = Number(val)
    if(num){
        localStorage.setItem("prev", val)
        printLength(num)
        printVolume(num)
        printMass(num)
    }
})

function printLength(val){
    let noun1, noun2, noun3, noun4
    let converted1 = (val*3.281).toFixed(2), converted2 = (val/3.281).toFixed(2)
    
    if(val === 1){
        noun1 = "meter"
        noun2 = "feet"
        noun3 = "foot"
        noun4 = "meters"
    }
    else{
        noun1 = "meters"
        noun2 = "feet"
        noun3 = "feet"
        noun4 = "meters"
    }
    
    render(lengthVal, val, noun1, noun2, noun3, noun4, converted1, converted2)
}

function printVolume(val){
    let noun1, noun2, noun3, noun4
    let converted1 = (val*0.264).toFixed(2), converted2 = (val/0.264).toFixed(2)
    
    if(val === 1){
        noun1 = "liter"
        noun2 = "gallons"
        noun3 = "gallon"
        noun4 = "liters"
    }
    else{
        noun1 = "liters"
        noun2 = "gallons"
        noun3 = "gallons"
        noun4 = "liters"
    }
    
    render(volumeVal, val, noun1, noun2, noun3, noun4, converted1, converted2)
}

function printMass(val){
    let noun1, noun2, noun3, noun4
    let converted1 = (val*2.204).toFixed(2), converted2 = (val/2.204).toFixed(2)
    
    if(val === 1){
        noun1 = "kilogram"
        noun2 = "pounds"
        noun3 = "pound"
        noun4 = "kilograms"
    }
    else{
        noun1 = "kilograms"
        noun2 = "pounds"
        noun3 = "pounds"
        noun4 = "kilograms"
    }
    
    render(massVal, val, noun1, noun2, noun3, noun4, converted1, converted2)
}

function render(place, val, noun1, noun2, noun3, noun4, converted1, converted2){
    let temp = `
                <span class="highlight">
                    ${val} ${noun1}
                </span> = ${converted1} ${noun2} | 
                <span class="highlight">
                    ${val} ${noun3}
                </span> = ${converted2} ${noun4}
                `
    
    place.innerHTML = temp
}