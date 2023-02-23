
const TEXTBOX = document.querySelector("#new_Password");
const COPY_BTN = document.querySelector("#copy_Password")
const CHARACTER_LENGTH_SLIDER = document.querySelector("#character-length-slider")
const CONDITIONS = document.querySelector("#conditions-checkboxes")
const GENERATE_BTN = document.querySelector("#generateBtn")
const log = console.log;

// Events
COPY_BTN.addEventListener("click", copyText);
CHARACTER_LENGTH_SLIDER.addEventListener("input", moveSlider);
GENERATE_BTN.addEventListener("click", generate_Password_To_Textbox)


//Function
function copyText(ev){
    // Copy text to clipboard
    navigator.clipboard.writeText(TEXTBOX.value);

}


//   function moveSlider(){
//     let character_length_display = document.querySelector("#display_character_length")
//      character_length_display.innerText = CHARACTER_LENGTH_SLIDER.value

//  }


const SLIDER_DATA = (function(){
  
  let character_length;

  function display_Value_Of_Slider(){
    let character_length_display = document.querySelector("#display_character_length")
    character_length_display.innerText = CHARACTER_LENGTH_SLIDER.value
    character_length = CHARACTER_LENGTH_SLIDER.value
  }

  function generatePassword(){
    console.log(character_length)

    const PASSWORD_STORE = [] 

    for(let i = 0; i < character_length; i++){
        const RANDOM_NUMBER = Math.floor(Math.random() * i)
        const CONVERT_TO_ALPHABET = String.fromCharCode(RANDOM_NUMBER + 96)
        PASSWORD_STORE.push(CONVERT_TO_ALPHABET)
    }

    TEXTBOX.value = PASSWORD_STORE.join("")
  }


  return {display_Value_Of_Slider, generatePassword}


})()



function moveSlider(){
    SLIDER_DATA.display_Value_Of_Slider()
}




function generate_Password_To_Textbox(){
    SLIDER_DATA.generatePassword()
}









