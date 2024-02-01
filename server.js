const express = require('express')
const app = express() //We are using express and storing in 'app' so whenever we see app its express
const cors = require('cors')
const PORT = 8000


app.use(cors())

const bikes = {
    'africa twin':{
        'brand': 'Honda',
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

    '':{
        'brand': 'Honda',
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
    'africa twin':{
        'brand': 'Honda',
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
    'unknown':{
        'brand': 'unknown',
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
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})

