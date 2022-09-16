const input = (desc) => `
    <div>
        <input placeholder="${desc}" type="text" id="${desc}-input">
        <p id="${desc}-errors"></p>
    </div>
`

const checkInput = (event) => {
    console.log(event)
    if (event.data === "<" || event.data === ">") {
        event.target.value = event.target.value.replace("<", "").replace(">", "")
    }
    
    const inputValue = event.target.value
    let inputError = ""
    if (inputValue.length < 3) {
        inputError = "Min 3 char!!!"
    }
    if (inputValue.length > 8) {
        inputError = "Max 8 char!!!"
    }
    if (!(inputValue.includes("_") || inputValue.includes("@") || inputValue.includes("!"))) {
        inputError = "Should contain at least one special char!!!"
    }

    const errorElement = event.target.parentNode.children[1]
    errorElement.innerText = inputError
}

const parts = [ "firstname", "lastname", "email", "password", "password-again" ]
document.getElementById("app").innerHTML =  parts.map(input).join("")
parts.forEach(part => document.getElementById(`${part}-input`).addEventListener("input", checkInput))

/* const checkInput = (event) => {
    console.log(event)
    if (event.data === "<" || event.data === ">") {
        event.target.value = event.target.value.replace("<", "").replace(">", "")
    }
    
    const inputValue = event.target.value
    let inputError = ""
    if (inputValue.length < 3) {
        inputError = "Min 3 char!!!"
    }
    if (inputValue.length > 8) {
        inputError = "Max 8 char!!!"
    }
    if (!(inputValue.includes("_") || inputValue.includes("@") || inputValue.includes("!"))) {
        inputError = "Should contain at least one special char!!!"
    }

    const errorElement = document.getElementById(event.target.id.replace("-input", "-errors"))
    errorElement.innerText = inputError
} */

/* const checkInput = (errorElement) => (event) => {
    console.log(event)
    if (event.data === "<" || event.data === ">") {
        event.target.value = event.target.value.replace("<", "").replace(">", "")
    }
    
    const inputValue = event.target.value
    let inputError = ""
    if (inputValue.length < 3) {
        inputError = "Min 3 char!!!"
    }
    if (inputValue.length > 8) {
        inputError = "Max 8 char!!!"
    }
    if (!(inputValue.includes("_") || inputValue.includes("@") || inputValue.includes("!"))) {
        inputError = "Should contain at least one special char!!!"
    }

    errorElement.innerText = inputError
} */

/* !!!! higher order function
usernameInput.addEventListener("input", checkInput(usernameError)))
passwordInput.addEventListener("input", checkInput(passwordError))
*/
