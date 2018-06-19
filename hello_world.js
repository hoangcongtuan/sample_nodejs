var express = require('express')
var app = express()
var bodyParser = require('body-parser')

//create application parser
var urlendcodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'))
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/ ' + 'index.html')
})

app.get('/process_get', (req, res) => {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    }

    console.log(response)
    res.end(JSON.stringify(response))
})

app.post('/process_post', urlendcodedParser, (req, res) => {
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }

    console.log(response)
    res.end(JSON.stringify(response))
})

app.get('/', (req, res) => {
    res.send('Hello GET')
})

app.post('/', (req, res) => {
    res.send('Hello POS')
})

app.delete('/delete_user', (req, res) => {
    res.send('Delete User')
})

app.get('/list_user', (req, res) => {
    res.send('Here is list user')
})

var server = app.listen(8081, () => {
    var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})