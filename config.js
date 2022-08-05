/**
   * Create By Lord Nya Kita Semua Bersama.
   * Contact Me on wa.me/6289688069444
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}

// Other
global.owner = ['6289688069444','6283167714830','62895336722950','6287721317870','6288292024190','6289688069444',''6289688069444','6285795035419','6289647417373','6287892711054','628995404155','62895411075941','62895386445819','62895327934887','6285828764046','6289518487462','6285228906300','6283183321692','6289688069444']
global.premium = ['6288292024190','6283167714830','62895336722950','6287721317870','6288292024190','6289688069444',''6289688069444','6285795035419','6289647417373','6287892711054','628995404155','62895411075941','62895386445819','62895327934887','6285828764046','6289518487462','6285228906300','6283183321692']
global.packname = 'Hisoka Morrow By Lord'
global.author = 'Lord WhatsApp'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿','#','$','%','@','/@TANDA-TANGAN-PERSETUJUAN-SANG-LORD#','+','-','_','~','/','>','√','»','«','P']
global.sp = '⭔'
global.mess = {
    success: '✓ Success Bro',
    admin: 'Yang Dapat Melakukan Ini Hanya Admin Saja Yang Bisa!',
    botAdmin: 'Jadikan Saya Menjadi Admin Agar Fitur Tersebut Bisa Di Gunakan!',
    owner: 'Hanya Owner Yang Dapat Melakukannya',
    group: 'Hanya Dapat Digunakan Di Dalam Grup Saja!',
    private: 'Gunakan Fitur Ini Di Chat Pribadi Saja!',
    bot: 'Khusus Pengguna Bot Atau Nomor Bot Saja Yang Dapat Melakukannya',
    wait: 'Sabar Sedang Loading/Memuat...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12, Silahkan Tunggu Hingga Waktu Tersebut, Sabar Ya',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
