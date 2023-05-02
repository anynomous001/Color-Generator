// javascript

const form = document.getElementById('form-holder')
let clickAlertEl  = document.getElementById('click-alert')
let url =``
let array = []

function renderColors(){
    
    let html_1 = ``
    let html_2 = ``
    for(let color of array){
        let hexCode = color.hex.value
       let colorName = color.name.value
        html_1 += `
        <div class="color-holder" id='colorHolder'style='background-color:${hexCode}'>
        <span class='rotate'>${colorName}</span></div>
        `
    }
    
    for(let color of array){
        let hexcode=color.hex.value
        html_2 += `
        <div class='hexValue'>${hexcode}</div>
        `
    }
   
    document.getElementById('colorContainer').innerHTML = html_1
    document.getElementById('hexDiv').innerHTML = html_2
    

  


   document.querySelectorAll('.hexValue').forEach(hexValue =>{
       hexValue.addEventListener('click',()=>{
           const input = document.createElement('textarea')
           input.value = hexValue.textContent;
           document.body.appendChild(input);
           input.select();
           document.execCommand('copy')
           document.body.removeChild(input);
           clickAlertEl.textContent = 'Hex Value is Copied to your Clip-Board!'
       })
       
   }) 
}



form.addEventListener('submit',function(e){
    e.preventDefault();
    
    let colorCode = document.getElementById('seed-color').value
    let colorMode = document.getElementById('color-mode').value
    
    
    clickAlertEl.textContent = 'Tap on the Hex-Value to copy!'
    console.log(colorMode)
    url = `https://www.thecolorapi.com/scheme?hex=${colorCode.slice(1)}&mode=${colorMode}&count=6`
    
    
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        array = data.colors,
        renderColors()
        
    })
})


