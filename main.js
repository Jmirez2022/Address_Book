let arrayOfUsers = [];

window.onload = function() {
    getUsers();
}

function getUsers() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(users => arrayOfUsers = users.results)
}

const Everyone = document.getElementById('every-user')

const displayUser =() => {

    arrayOfUsers.results((user) => {
   const li = document.createElement('li');
    li.id = 'button'

    const text = document.createTextNode(`First Name: ${user.name.first}, Last Name: ${user.name.last},`)
    
    const source = user.picture.thumbnail
    
    const img = document.createElement('img')
    
    img.src = source;

    const button = document.createElement('button')

    const buttonDisplayText = document.createTextNode("More Data")

    button.onclick = displayMoreData

    button.appendChild(buttonDisplayText)

    Everyone.append(button)

    li.appendChild(text)

    Everyone.append(li)

    Everyone.append(img)

})
}

const displayMoreData = () => {
    arrayOfUsers.results.map((user) => {
        const getAge = user.dob.age

        const getNumber = user.phone

        let liId = document.getElementById('displayUser')

        const Data = document.createTextNode (`Age: ${getAge} Phone Number: ${getNumber}`)

        liId.appendChild(Data)

        Everyone.append(li)
    })
    console.log('Yipee!!!')
}