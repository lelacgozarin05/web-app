
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTWo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
//const messageFour = document.querySelector('#message-4')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTWo.textContent = ''
    messageThree.textContent = ''
    fetch('/weather?address=' + location).then((response) =>{
        response.json().then((data) => {
            if (data.error) {
                    messageOne.textContent = data.error
            }else{

                messageOne.textContent = data.location
                messageOne.textContent = data.location
                messageThree.textContent = data.forecast
                
            }
        })
    })
})