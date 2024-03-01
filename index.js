const express = require('express');
const cors = require ('cors')

const app = express();

app.use(cors());

const todo = [
    {
        userId: 1,
        id : 1,
        title: 'Miguel Gil',
        completed: false 
    },{
        userId: 1,
        id : 2,
        title: 'Maria Isabel',
        completed: false 
    },{
        userId: 1,
        id : 3,
        title: 'Daniel Rutia',
        completed: false 
    },{
        userId: 1,
        id : 4,
        title: 'Yeison cabrera',
        completed: false 
    },{
        userId: 1,
        id : 5,
        title: 'Camilo Ubaque',
        completed: false 
    },{
        userId: 1,
        id : 6,
        title: 'Andre montilla',
        completed: false 
    },{
        userId: 1,
        id : 7,
        title: 'Dario Gomez',
        completed: false 
    },{
        userId: 1,
        id : 8,
        title: 'Sepulveda',
        completed: false 
    }
]

app.get('/', (req, res)=> {
    res.json(todo);
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Server started on http://localhost:3000')
})
