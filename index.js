const app = require('./app');
const mongodb = require('./config/db');
const userModel = require('./model/user.model');


const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello World')
});

app.listen(port, ()=>{
    console.log(`Server Listening on Port http://localhost:${port}`);
});