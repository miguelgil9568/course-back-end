const express = require('express');

const app = express();

const todo = [
    {
        userId: 1,
        id : 1,
        title: 'Faires les courses',
        completed: false 
    },{
        userId: 1,
        id : 2,
        title: 'Faires les courses',
        completed: false 
    },{
        userId: 1,
        id : 3,
        title: 'Faires les courses',
        completed: false 
    },{
        userId: 1,
        id : 4,
        title: 'Faires les courses',
        completed: false 
    },{
        userId: 1,
        id : 5,
        title: 'Faires les courses',
        completed: false 
    },{
        userId: 1,
        id : 6,
        title: 'Faires les courses',
        completed: false 
    },{
        userId: 1,
        id : 7,
        title: 'Faires les courses',
        completed: false 
    },{
        userId: 1,
        id : 8,
        title: 'Faires les courses',
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