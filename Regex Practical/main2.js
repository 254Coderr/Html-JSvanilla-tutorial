//adding Event Listener
document.getElementById("phoneNum").addEventListener("input",(event)=>{
    // Creates a regular expression to match phone numbers
    const regex=/^(\+?\d{1,3})?[-. ]?(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/g
    //Get method input, form element and phone number
    const input=document.getElementById("phoneNum");
    const format=document.querySelector("phoneForm");
    const phone=input.value;
   //verify or test phone number against the regular expression
    const found =regex.test(phone);
    // If phone number is not valid, invalid class is added to the input element and display the error message
    if(! found && phone.length){
        input.classList.add("invalid");
        format.classList.add("block")
    }
    else {
        input.classList.remove("invalid");format.classList.remove("block");}
    
}
);
// Add event listener to the phone form to prevent it from submitting and instead save the phone number
document.getElementById("phoneForm").addEventListener("submit",(event)=>{
    //This is the one that Prevent the form from submitting
    event.preventDefault();
    // Get the input element
    const input=document.getElementById("phoneNum");
    // This regular expression is to remove any special characters from the phone number
    const regex=/[()-. ]/g
    /// Remove ANY special characters from the phone number and save it to a variable
    const savedPhoneNum=input.value.replaceAll(regex,"");
    //print the phone number to consule
    console.log(savedPhoneNum)
}
);
//an event listener to the text form to prevent it from submitting and instead clean up the text
document.getElementById("textForm").addEventListener("submit",(event)=>{
    event.preventDefault();
    document.getElementById("textEntry");
    //get the input element
    const input=document.getElementById("textEntry");
    // Create a regular expression to remove any extra spaces from the text
    const regex=/ {2,}/g;
    // Cleans text by doing away any extra spaces and  use trimming it at the beginning and end
    const newText=input.value.replaceAll(regex,"").trim();
    //print cleaned text to console
console.log(newText);

  // Encode the input text and cleaned-up text
const encodedInputText = encodeURIComponent(input.value);
const encodedCleanText = encodeURI(newText);

// Print the encoded values to the console
console.log(encodedInputText);
console.log(encodedCleanText);
 })  