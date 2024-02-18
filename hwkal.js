


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/HMG6bdqACJBBBHiUuiwSko'
global.ig = '@𝙘𝙮𝙗𝙚𝙧 𝙝𝙤𝙨𝙩𝙞𝙣𝙜' // ubah aja
global.email = '𝙘𝙮𝙗𝙚𝙧𝙝𝙤𝙨𝙩𝙞𝙣𝙜@official.website' //serah
global.region = 'Indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'DikaHosting' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.domain = 'https://dikahosting.panellshop.biz.id' // Isi Domain Lu
global.apikey2 = 'ptla_wwBkBzmjlXpfglCEyEZF4UauZ0lGAnIwLhrIH2ABPX5' // Isi Apikey Plta Lu
global.capikey2 = 'ptlc_YpiQn2SYPqJx6hA5zBpaKkMBhZzX0tCehY6XQY6ngXN' // Isi Apikey Pltc Lu
global.eggsnya = '1' // id eggs yang dipakai
global.location = '1' // id location
//=================================================//
global.apitokendo = '-' // isi apimu
global.apilinode = '-' // isi apimu
//=================================================//
global.owner = ['6282163617264','6283849560268'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = '𝙘𝙮𝙗𝙚𝙧 𝙝𝙤𝙨𝙩𝙞𝙣𝙜' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '𝙘𝙮𝙗𝙚𝙧 𝙝𝙤𝙨𝙩𝙞𝙣𝙜' // ubah aja ini nama sticker
global.author = '𝙘𝙮𝙗𝙚𝙧 𝙝𝙤𝙨𝙩𝙞𝙣𝙜' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.themeemoji = '🪀' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = false
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})