let fs = require('fs')        
let chalk = require('chalk')
global.owner = [
  ['79054642792'],
  ['79054642792'],
  ['79054642792', 'azwan Gans', true]  
  
] 
global.ownername = [['axwan ๐๐๐ง๐ฌ']]
global.namabot = [['azwan๐ฉ๐ถ๐ป๐']]
global.ownerinsta = [['@b4c00t.dtz']]
global.instalu = [['instagram.com/b4c00t.dtz']]
global.ytlu = [['https://youtube.com/channel/UCmEQy5B3GhmfNVSrHEzv-uA']]
global.mods = [] 
global.prems = ['79054642792'] 

global.APIs = { 
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org/',
  gimez: 'https://masgimenz.my.id/',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com',
  alphabot: 'https://api-alphabot.herokuapp.com'
}
global.APIKeys = { 
  'https://api.xteam.xyz': '524e9d1f64f72f79',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': '0fWgL9ID',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA',
  'https://api-alphabot.herokuapp.com': 'N7axnIq3'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = '๐๐๐๐๐ซ๐ข ๐๐๐ง๐ฌ'
  var sticker_author = 'ยฉ ๐ฎ๐๐๐๐ฉ๐ถ๐ป๐'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Sticker WM
global.packname = '๐๐๐๐๐ซ๐ข ๐๐๐ง๐ฌ'
global.author = '๐ฎ๐๐๐๐ฉ๐ถ๐ป๐'
global.wm = 'ยฉ Deffri Gans'

global.multiplier = 100

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: 'โ๏ธ',
      money: '๐ต',
      potion: '๐ฅค',
      diamond: '๐',
      common: '๐ฆ',
      uncommon: '๐',
      mythic: '๐ณ๏ธ',
      legendary: '๐๏ธ',
      pet: '๐',
      trash: '๐',
      armor: '๐ฅผ',
      sword: 'โ๏ธ',
      wood: '๐ชต',
      rock: '๐ชจ',
      string: '๐ธ๏ธ',
      horse: '๐',
      cat: '๐' ,
      dog: '๐',
      fox: '๐ฆ',
      petFood: '๐',
      iron: 'โ๏ธ',
      gold: '๐',
      emerald: '๐'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
