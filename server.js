const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response)=> {
    response.sendFile(__dirname +'/index.html');
});

app.get('/about', (req, res)=>{
    res.send ('Hello, I am Tommy. Nice to meet you');
});


app.listen(3000, ()=> {
    console.log('server running, port 3000')
});