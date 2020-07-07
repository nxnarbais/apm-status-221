const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/status221', (req, res) => res.status(221).json({ foo: 'bar' }))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
