
// Selectors-----------------------------------------------------

const TEXTBOX = document.querySelector("#new_Password");
const COPY_BTN = document.querySelector("#copy_Password")
const CHARACTER_LENGTH_SLIDER = document.querySelector("#character-length-slider")
const CONDITIONS = document.querySelector("#conditions-checkboxes")
const GENERATE_BTN = document.querySelector("#generateBtn")
const log = console.log;

// Events---------------------------------------------------------

COPY_BTN.addEventListener("click", copyText);
CHARACTER_LENGTH_SLIDER.addEventListener("input", moveSlider);
GENERATE_BTN.addEventListener("click", generate_Password_To_Textbox)



//Functions--------------------------------------------------------

function copyText(ev){
    // Copy text to clipboard
    navigator.clipboard.writeText(TEXTBOX.value);

}


// This creates a self-invoking anonymous function 
//that returns an object with two methods:
// display_Value_Of_Slider and generatePassword

const SETTINGS = (function(){
  
  // This variable is defined within the scope of the anonymous function
  // and is not accessible outside of it
  let character_length;

  function display_Value_Of_Slider(){
    let character_length_display = document.querySelector("#display_character_length")
    character_length_display.innerText = CHARACTER_LENGTH_SLIDER.value
    character_length = CHARACTER_LENGTH_SLIDER.value
  }

  function generatePassword(uppercase_is_checked, lowercase_is_checked, numbers_is_checked, symbols_is_checked){
    //creates an array to store all random values
    const RANDOM_VALUE_STORE = [] 



    //This block of code is design to push random alphabet letters to the "RANDOM_VALUE_STORE array"
    //First it loops according to the value of "character_length"
    for(let i = 0; i < character_length; i++){
      const RANDOM_NUMBER = Math.floor(Math.random() * 26) // Generates a random number between 0 - 25



      // if user ticked the lowercase checkbox
      if(lowercase_is_checked){
        const CONVERT_TO_ALPHABET = String.fromCharCode(RANDOM_NUMBER + 97) // Converts the random number to its corresponding alphabet letter.
        RANDOM_VALUE_STORE.push(CONVERT_TO_ALPHABET) // Adds the letter to the RANDOM_VALUE_STORE array
      }
      // if user ticked the uppercase checkbox
      if(uppercase_is_checked){
        const CONVERT_TO_ALPHABET = String.fromCharCode(RANDOM_NUMBER + 97).toUpperCase() // Converts the random number to its corresponding alphabet letter and Uppercase the letters.
        RANDOM_VALUE_STORE.push(CONVERT_TO_ALPHABET) // Adds the letter to the RANDOM_VALUE_STORE array
      }
      // if user ticked the numbers checkbox
      if(numbers_is_checked){
        RANDOM_VALUE_STORE.push(Math.floor(Math.random() * 10))// Generates a random number between 0 - 9 and adds to RANDOM_VALUE_STORE array.
      }
      
      // if user ticked the symbols checkbox
      if(symbols_is_checked){
        const CONVERT_TO_SYMBOLS = String.fromCharCode(RANDOM_NUMBER + 32)
        RANDOM_VALUE_STORE.push(CONVERT_TO_SYMBOLS) // Adds the letter to the RANDOM_VALUE_STORE array
      }
    
    }


    // once all random values are inside the RANDOM_VALUE_STORE
    // we need to shorten the characters according the value of "character_length"
    const PASSWORD_ARRAY = RANDOM_VALUE_STORE.splice(0, character_length)
   
    //The PASSWORD_ARRAY length can be zero if user havent ticked any options.
    // if that happens, we need to display the message as "Tick atleast one option"
    // And we should disable the copy button
    


    //if "PASSWORD_ARRAY" length is more that zero
   if(PASSWORD_ARRAY.length > 0){
     
     // Joins the letters in the PASSWORD_STORE array into a string and displays it in the textbox
     TEXTBOX.value = PASSWORD_ARRAY.join("")
      
    //  Enable the copy button
      COPY_BTN.classList.remove("disable_btn")


   //if the length is less than zero   
   }else{

    // Disable the copy button
    COPY_BTN.classList.add("disable_btn")

    // Display the message on the textbox if non of the options are ticked
    TEXTBOX.value = "Tick atleast one option"
   }



   //This conditional statement checks the strength of the password

   const DISPLAY_STRENGTH = document.querySelector("#displayStrength");
   const BARS = document.querySelectorAll("#_bar")

   if(PASSWORD_ARRAY.length < 7){
    DISPLAY_STRENGTH.innerText = "WEAK"
    BARS[0].style.backgroundColor = "red"

    // Remove the bgColor from the bar
    for(let i = 1; i < BARS.length; i++){
      BARS[i].style.backgroundColor = ""
    }
   }
   else if(PASSWORD_ARRAY.length < 12){
    DISPLAY_STRENGTH.innerText = "MEDIUM"
    
    // Add bgColor to the bar
    for(let i = 0; i < 2; i++){
      BARS[i].style.backgroundColor = "orange"
   }

  //  Remove the bgColor from the bar
  for(let i = 2; i < BARS.length; i++){
    BARS[i].style.backgroundColor = ""
  }
}
   else if(PASSWORD_ARRAY.length < 22){
    DISPLAY_STRENGTH.innerText = "STRONG"

    // Add bgColor to the bar
    for(let i = 0; i < 3; i++){
      BARS[i].style.backgroundColor = "green"
    }

    // Remove the bgColor from the bar
    for(let i = 3; i < BARS.length; i++){
      BARS[i].style.backgroundColor = ""
    }

   }
   else{
    DISPLAY_STRENGTH.innerText = "ELITE"

    // Add bgColor to the bar
    for(let i = 0; i < 4; i++){
      BARS[i].style.backgroundColor = "blue"
    }
   }


  }

  // This returns an object with two methods: 
  //display_Value_Of_Slider and generatePassword. 
  //These methods can be called from outside the anonymous function to interact with the password generator
  return {display_Value_Of_Slider, generatePassword}


})()


// Event callback function for the slider
function moveSlider(){
    SETTINGS.display_Value_Of_Slider()
}



// Event callback function for the Generate button
function generate_Password_To_Textbox(){ 
    
    // Passes all the values of the checkbox to the method "generatePassword"
    const UPPERCASE_IS_CHECKED = document.querySelector("#upperCaseLetters").checked
    const LOWERCASE_IS_CHECKED = document.querySelector("#lowerCaseLetters").checked
    const NUMBERS_IS_CHECKED = document.querySelector("#numbers").checked
    const SYMBOLS_IS_CHECKED = document.querySelector("#symbols").checked

    SETTINGS.generatePassword(UPPERCASE_IS_CHECKED, LOWERCASE_IS_CHECKED, NUMBERS_IS_CHECKED, SYMBOLS_IS_CHECKED)
}










