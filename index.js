const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());



const categories = require('./Categories.json')
app.get('/course-categories', (req, res) => {
    res.send(categories)
})








app.get('/', (req, res) => {
    res.send('Learner api running')
})
app.listen(port, () => {
    console.log('This server is running on this port', port);
})