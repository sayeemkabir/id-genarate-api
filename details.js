let details = location.search.split("id=")[1]

console.log(details)

let imgDiv = document.querySelector(".container .imgDiv");
let name = document.querySelector(".container .infoDiv .nameDiv .actName");
let email = document.querySelector(".container .infoDiv .emailDiv .actEmail");
let phone = document.querySelector(".container .infoDiv .phonediv .actPhone");
let gender = document.querySelector(".container .infoDiv .GenderDiv .actGender");
let employ = document.querySelector(".container .infoDiv .empDiv .actEmp");
let address = document.querySelector(".container .infoDiv .addressDiv .actEmail");
let subscription = document.querySelector(".container .infoDiv .subscriptionDiv .actsubs");


async function userInfo(){

    let singleuser = await fetch(`https://random-data-api.com/api/v2/users?id=${details}`)

    let singleJson = await singleuser.json()


    mainsingle = singleJson

    console.log(mainsingle)

    let imgCreate = document.createElement("img");
    imgCreate.setAttribute("src", "")


}






















