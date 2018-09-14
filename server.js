require('dotenv').config();

let express = require('express')
let app = express()
let routes = require('./routes/routes')
let bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.static('/app/public'))

app.use(routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))