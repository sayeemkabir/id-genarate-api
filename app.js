
let inputBox = document.querySelector(".container .input-field")

inputBox.addEventListener("input", maxValue)

function maxValue(){

    

}




userNumber()

function userNumber(){
    let inputValue = document.querySelector(".container .input-field").value;

    inputValNumber = +inputValue;

    if(inputValNumber > 100){
        let errShow = document.querySelector(".container .errorMsg");

        errShow.innerHTML = "The maximum limit is 100!"
    }


    let driveLink = document.querySelector(".container a")

    driveLink.setAttribute("href", `user.html?user=${inputValue}`)
   

    console.log(typeof(inputValNumber))


}





