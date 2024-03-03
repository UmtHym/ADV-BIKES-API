const express = require('express')
const app = express() //We are using express and storing in 'app' so whenever we see app its express
const cors = require('cors')
const PORT = 8000


app.use(cors())

let bikes = {
    'africa twin': {
        'brand': 'honda',
        'year': '2024',
        'engine': '1084cc P Twin',
        'torque': '100.6hp 77 lb-ft (104nm)',
        'transmission': '6 speed Manual/DCT Chain',
        'forks': 'Showa 45 mm USD 9.1" Electronic',
        'shocks': '8.7" Pre(E)',
        'wheels': 'X Spoked 21"/18"',
        'tires': 'Meltzeler Karoo Street 90/90/21 150/70/18',
        'brakes':{ 
            'brand': 'Nissin',
            'abs': 'Lean Sense Switchable Offroad',
            'front disc': '310mm x2',
            'rear': '256mm x1'
        },
        'wet weight': '240kgs',
        'seat height': 'high 870mm low 850mm',
        'fuel':{
            'usage': '21 kmpl',
            'tank capacity': '24.8/19.0 ltrs',
            'range': '520/400 kms'
        },
        'cost': '21.000€/17.000€'
    },
    '890 Adventure R': {
        'brand': 'KTM',
        'year': '2021',
        'engine': '1889 cc P Twin',
        'torque': '104 hp 74 lb-ft (100nm)',
        'transmission': '6 speed Manual Chain',
        'forks': 'WP 48mm USD 90.4" Com/Reb',
        'shocks': '9.4" Full',
        'wheels': 'X Spoked 21"/18"',
        'tires': 'Continental TKC80 90/90/21 150/70/18',
        'brakes':{ 
            'brand': 'J.Juam',
            'abs': 'Lean Sense Switchable Offroad',
            'front disc': '320mm x2',
            'rear': '260mm x1'
        },
        'wet weight': '210kgs',
        'seat height': 'high 880mm',
        'fuel':{
            'usage': '20 kmpl',
            'tank capacity': '20 ltrs',
            'range': '400 kms'
        },
        'cost': '16.199€'
    },
    'Desert-X': {
        'brand': 'Ducati',
        'year': '2024',
        'engine': '937 cc L Twin',
        'torque': '110 hp 68 lb-ft (92nm)',
        'transmission': '6 speed Manual Chain',
        'forks': 'KYB 46mm USD 9.1" Full',
        'shocks': '8.7" Full',
        'wheels': 'X Spoked 21"/18"',
        'tires': 'Pirelli Scorpion STR 90/90/21 150/70/18',
        'brakes':{ 
            'brand': 'Brembo',
            'abs': 'Lean Sense Switchable Offroad',
            'front disc': '320mm x2',
            'rear': '260mm x1'
        },
        'wet weight': '223kgs',
        'seat height': 'high 875mm',
        'fuel':{
            'usage': '17 kmpl',
            'tank capacity': '21 ltrs',
            'range': '360 kms'
        },
        'cost': '16.490€'
    },
    'Norden 901 Expedition': {
        'brand': 'Husqvarna',
        'year': '2024',
        'engine': '889 cc P Twin',
        'torque': '104 hp 74 lb-ft (100nm)',
        'transmission': '6 speed Manual Chain',
        'forks': 'WP XPLOR 48mm 240mm',
        'shocks': 'WP XPLOR 240 mm',
        'wheels': 'X Spoked 21"/18"',
        'tires': 'Continental TKC80 90/90/21 150/70/18',
        'brakes':{ 
            'brand': 'J.Juam',
            'abs': 'Lean Sense Switchable Offroad',
            'front disc': '320mm x2',
            'rear': '260mm x1'
        },
        'wet weight': '214kgs',
        'seat height': 'high 895mm low 875mm',
        'fuel':{
            'usage': '20 kmpl',
            'tank capacity': '19 ltrs',
            'range': '400 kms'
        },
        'cost': '15.299€'
    },
    'unknown': {
        'model': 'unknown',
        'year': 'unknown',
        'engine': 'unknown',
        'torque': 'unknown',
        'transmission': 'unknown',
        'forks': 'unknown',
        'shocks': 'unknown',
        'wheels': 'unknown',
        'tires': 'unknown',
        'brakes':{ 
            'brand': 'unknown',
            'abs': 'unknown',
            'front disc': 'unknown',
            'rear': 'unknown'
        },
        'wet weight': 'unknown',
        'seat height': 'unknown',
        'fuel':{
            'usage': 'unknown',
            'tank capacity': 'unknown',
            'range': 'unknown'
        },
        'cost': 'unknown'
    },
}

app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:model', (request, response)=>{
    const bikeModel = request.params.model.toLowerCase()
    if(bikes[bikeModel]){
        response.json(bikes[bikeModel])
    } else{
        response.json(bikes['unknown'])
    }
    
})


app.listen(process.env.PORT || PORT, ()=>{ 
    console.log(`The server is running You better go catch it!`)
})

