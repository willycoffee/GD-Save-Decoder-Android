const fs = require('fs')
const Crypto = require('./crypto.js')
let crypto = new Crypto()

fs.readFile('CCLocalLevels.dat', 'utf8', function (err, saveData) {
    if (err) return console.log("Error! Could not open or find GD save file")
    let decoded = crypto.decode(saveData)
    if (!decoded) return
    fs.writeFileSync('CCLocalLevels.xml', decoded, 'utf8')
    console.log(`Saved!`);
})
