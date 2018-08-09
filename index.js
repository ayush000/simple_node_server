const app = require('express')();
const fs = require('fs')

app.get('/', (req, res) => {
  fs.readFile('abc.csv', 'utf8', (err, data) => {
    // console.log(data)
    res.setHeader("Content-Type", "text/csv; charset=utf-8")
    res.setHeader("Content-Disposition", "attachment;filename=myfilename.csv")
    res.send (data)
  })
})

app.listen(3000, () => {
  console.log("server has initialized");
})