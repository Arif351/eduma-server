const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());



const categories = require('./Categories.json')
const courseDetails = require('./courseDetails.json')

app.get('/course-categories', (req, res) => {
    res.send(categories)
})

app.get('/courseDetails', (req, res) => {
    res.send(courseDetails)
})

app.get('/courseDetails/:id', (req, res) => {
    const id = req.params.id
    const eachCourse = courseDetails.find(c => c._id === id);
    res.send(eachCourse)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id
    const category = courseDetails.filter(ce => ce._id === id);
    res.send(category)
})








app.get('/', (req, res) => {
    res.send('Learner api running')
})
app.listen(port, () => {
    console.log('This server is running on this port', port);
})