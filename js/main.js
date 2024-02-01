document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const bikeModel = document.querySelector('input').value
    try{
        const response = await fetch(`https://git.heroku.com/adv-bikes-api-heroku.git/api/${bikeModel}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.brand
    }catch(error){
        console.log(error)
    }
}