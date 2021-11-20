const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Nếu bạn không chịu bắt tay vào làm thì chẳng có gì khả thi cả _ Jack Ma kkk')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})