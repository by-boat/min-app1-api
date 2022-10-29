const fs = require('fs');
const path = require('path');


fs.readFile(path.join(__dirname, './newdata.json'), (err, data) => {
  if (err) {
    return console.log(err)
  }
  let data_ = JSON.parse(data.toString())
  let idx = 1;
  data_.map((item) => {
    item.url = 'http://192.168.0.195:3000/images/goods' + idx + '-bg.jpg'
    idx = idx + 1
    if (idx > 30) {
      idx = 1
    }
  })

  fs.writeFile(path.join(__dirname, './newdata1.json'), JSON.stringify(data_), (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('写入成功')
  })
})
