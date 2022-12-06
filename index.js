// Add your code here
// Add your code here
// const userNm = document.getElementById('userName');
// const userEm = document.getElementById('userEmail');
// const form = document.querySelector('form');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let userName = userNm.value;
//     let userEmail = userEm.value;
//     console.log(userName)
//     console.log(userEmail)
//     submitData(userName, userEmail)
//     console.log('hey')

// })

function submitData(userName, userEmail) {
    const configuration = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify({ name: userName, email: userEmail, }),
    };
    return fetch('http://localhost:3000/users', configuration)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            const p = document.createElement('p');
            p.textContent = data.id;
            document.body.appendChild(p);
            
        })
        .catch(function (error) {
         const p = document.createElement('p');
            p.textContent = error.message;
            document.body.appendChild(p);
           
});
   
}

// submitData();
submitData("Ella", "el@gmail.com")

