let userNumber = location.search.split("user=")[1]

console.log(userNumber)

let parent = document.querySelector(".container")


bringUserData()

async function bringUserData(){


    let fetchUsers = await fetch(`https://random-data-api.com/api/v2/users?size=${userNumber}`)

    let toJSON = await fetchUsers.json()

    let generatedUsers = toJSON

    console.log(generatedUsers)


    for(var i = 0; i<=generatedUsers.length; i++){

        let userDiv = document.createElement("div");
        userDiv.setAttribute("class", "userMainDiv");
        parent.appendChild(userDiv);

        let avatar = document.createElement("div");
        avatar.setAttribute("class", "avatar text-center");
        userDiv.appendChild(avatar);

        let dp = document.createElement("img");
        dp.setAttribute("src", generatedUsers[i].avatar);
        avatar.appendChild(dp)

        let name = document.createElement("p");
        name.setAttribute("class", "fw-bold m-auto name pt-3")
        avatar.appendChild(name)

        let nameText = document.createTextNode(`${generatedUsers[i].first_name} ${generatedUsers[i].last_name}`)
        name.appendChild(nameText)

        let information = document.createElement("div");
        information.setAttribute("class", "infoDiv pt-5")
        userDiv.appendChild(information)

        let userNameTag = document.createElement("p");
        userNameTag.setAttribute("class", "userName");
        information.appendChild(userNameTag);

        let usernametext = document.createTextNode(`UserName: ${generatedUsers[i].username}`);
        userNameTag.appendChild(usernametext)

        let email = document.createElement("p");
        email.setAttribute("class", "email")
        information.appendChild(email)

        let emailtext = document.createTextNode(`Email: ${generatedUsers[i].email}`);
        email.appendChild(emailtext)

        let gender = document.createElement("p");
        gender.setAttribute("class", "gender");
        information.appendChild(gender);

        let gendertext = document.createTextNode(`Gender: ${generatedUsers[i].gender}`);
        gender.appendChild(gendertext);

        let phoneNumber = document.createElement("p");
        phoneNumber.setAttribute("class", "phone");
        information.appendChild(phoneNumber)

        let phoneText = document.createTextNode(`Phone: ${generatedUsers[i].phone_number}`)
        phoneNumber.appendChild(phoneText); 

        let DOB = document.createElement("p");
        DOB.setAttribute("class", "dateOfBirth");
        information.appendChild(DOB);

        let dobText = document.createTextNode(`Date of Birth: ${generatedUsers[i].date_of_birth}`)
        DOB.appendChild(dobText)

        let linkButton = document.createElement("a");
        linkButton.setAttribute("href", `details.html?id=${generatedUsers[i].id}`);
        information.appendChild(linkButton);
        
        let viewDetailsBtn = document.createElement("button");
        viewDetailsBtn.setAttribute("class", "DetailsButton btn btn-warning mt-4");
        linkButton.appendChild(viewDetailsBtn);

        let buttonText = document.createTextNode("View More Details")
        viewDetailsBtn.appendChild(buttonText)


        


    }

}

