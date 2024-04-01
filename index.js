const makeWASocket = require("@whiskeysockets/baileys").default
const { Boom } = require('@hapi/boom')
////qr
const NodeCache = require("node-cache")
const readline = require("readline")
///
const PhoneNumber = require('awesome-phonenumber')
const cfonts = require('cfonts');
const pino = require('pino')
const fs = require("fs")
const ffmpeg = require("fluent-ffmpeg")
const util = require("util")
const axios = require('axios')
const { exec, spawn, execSync } = require("child_process")
let phoneNumber = "5493772455367"; // cambiar número
const { isFiltered, addFilter } = require('./Media/Addfilter')
const welkom = JSON.parse(fs.readFileSync('./Media/welkom.json'))
const { default: JulsBotIncConnect, getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys")
const chalk = require('chalk')
const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
const banner = cfonts.render('GuruBOT', {
    font: 'block',            // Estilo de letra a 'block'
    align: 'center',          // Centrado del texto
    background: 'transparent', // Fondo transparente
    letterSpacing: 0,         // Espaciado entre letras reducido a 0
    lineHeight: 1,            // Altura de línea
    space: true,              // Espacio entre líneas
    maxLength: '0',           // Longitud máxima
    gradient: ['cyan', 'magenta'], // Cambio del gradiente de color
    independentGradient: true,     // Gradiente independiente
    transitionGradient: true,      // Transición de gradiente
    env: 'node'
});
////qr número 
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
//////
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const color = (text, color) => { return !color ? chalk.yellow(text) : chalk.keyword(color)(text) };
function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}

// Constantes Editables
const prefixo = "."; // Cambiar Prefijo Aquí
const wm = "SUPREME009" // cambiar creador
const botname = "GURUBOT" // Cambiar nombre del bot

const numerodono = "+5493772455367"; // cambiar número
const themeemoji = "✨" ; // cambiar emoji

async function startProo() {

// Método Privado con Número // Encriptado
function _0x4cf1(_0x398f11,_0x5d887d){const _0x2c06f3=_0x2c06();return _0x4cf1=function(_0x4cf186,_0x177a47){_0x4cf186=_0x4cf186-0x1ea;let _0x2038cd=_0x2c06f3[_0x4cf186];return _0x2038cd;},_0x4cf1(_0x398f11,_0x5d887d);}const _0x13243b=_0x4cf1;(function(_0x2a5c55,_0x1c7ac7){const _0x126f84=_0x4cf1,_0x27717d=_0x2a5c55();while(!![]){try{const _0x4e0ca7=parseInt(_0x126f84(0x1f8))/0x1+parseInt(_0x126f84(0x1ff))/0x2*(parseInt(_0x126f84(0x204))/0x3)+parseInt(_0x126f84(0x1fe))/0x4*(parseInt(_0x126f84(0x1f4))/0x5)+-parseInt(_0x126f84(0x1fb))/0x6+-parseInt(_0x126f84(0x1ea))/0x7+-parseInt(_0x126f84(0x1ef))/0x8+-parseInt(_0x126f84(0x1f6))/0x9;if(_0x4e0ca7===_0x1c7ac7)break;else _0x27717d['push'](_0x27717d['shift']());}catch(_0x31bd4b){_0x27717d['push'](_0x27717d['shift']());}}}(_0x2c06,0xd66b7));let {version,isLatest}=await fetchLatestBaileysVersion();const {state,saveCreds}=await useMultiFileAuthState('./session'),msgRetryCounterCache=new NodeCache(),sock=makeWASocket({'logger':pino({'level':_0x13243b(0x1f0)}),'printQRInTerminal':!pairingCode,'mobile':useMobile,'browser':['Ubuntu',_0x13243b(0x1ee),'20.0.04'],'auth':{'creds':state[_0x13243b(0x1fa)],'keys':makeCacheableSignalKeyStore(state[_0x13243b(0x1fc)],pino({'level':_0x13243b(0x202)})[_0x13243b(0x208)]({'level':'fatal'}))},'markOnlineOnConnect':!![],'generateHighQualityLinkPreview':!![],'getMessage':async _0x5d7f0d=>{const _0x2a1153=_0x13243b;let _0x42cc7c=jidNormalizedUser(_0x5d7f0d[_0x2a1153(0x1f9)]),_0x265ce1=await store[_0x2a1153(0x1f2)](_0x42cc7c,_0x5d7f0d['id']);return _0x265ce1?.['message']||'';},'msgRetryCounterCache':msgRetryCounterCache,'defaultQueryTimeoutMs':undefined});store['bind'](sock['ev']);if(pairingCode&&!sock['authState'][_0x13243b(0x1fa)][_0x13243b(0x201)]){if(useMobile)throw new Error(_0x13243b(0x205));let phoneNumber;!!phoneNumber?(phoneNumber=phoneNumber[_0x13243b(0x1f5)](/[^0-9]/g,''),!Object[_0x13243b(0x1fc)](PHONENUMBER_MCC)[_0x13243b(0x206)](_0xb3068f=>phoneNumber[_0x13243b(0x1ec)](_0xb3068f))&&(console['log'](chalk[_0x13243b(0x209)](chalk['redBright'](_0x13243b(0x1f1)))),process['exit'](0x0))):(phoneNumber=await question(chalk[_0x13243b(0x209)](chalk[_0x13243b(0x1fd)](_0x13243b(0x203)))),phoneNumber=phoneNumber[_0x13243b(0x1f5)](/[^0-9]/g,''),!Object[_0x13243b(0x1fc)](PHONENUMBER_MCC)[_0x13243b(0x206)](_0x2eeb80=>phoneNumber['startsWith'](_0x2eeb80))&&(console['log'](chalk[_0x13243b(0x209)](chalk[_0x13243b(0x207)](_0x13243b(0x1f1)))),phoneNumber=await question(chalk[_0x13243b(0x209)](chalk['greenBright'](_0x13243b(0x203)))),phoneNumber=phoneNumber[_0x13243b(0x1f5)](/[^0-9]/g,''),rl['close']())),setTimeout(async()=>{const _0x489bf9=_0x13243b;let _0x8a96ab=await sock[_0x489bf9(0x1eb)](phoneNumber);_0x8a96ab=_0x8a96ab?.[_0x489bf9(0x20a)](/.{1,4}/g)?.[_0x489bf9(0x1f3)]('-')||_0x8a96ab,console['log'](chalk[_0x489bf9(0x1f7)](chalk[_0x489bf9(0x200)](_0x489bf9(0x20b))),chalk[_0x489bf9(0x1f7)](chalk[_0x489bf9(0x1ed)](_0x8a96ab)));},0xbb8);}function _0x2c06(){const _0x1bbd11=['1637373LZnyZs','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api','some','redBright','child','bgBlack','match','Your\x20Pairing\x20Code\x20:\x20','1250522JShAKL','requestPairingCode','startsWith','white','Chrome','9897888veqNgu','silent','Start\x20with\x20country\x20code\x20of\x20your\x20WhatsApp\x20Number,\x20Example\x20:\x20+5493772455367','loadMessage','join','3095530dIuEjy','replace','985968qabeqv','black','1465506gzUlAn','remoteJid','creds','1360236TOTwHA','keys','greenBright','4gBEQlq','2csqFkw','bgGreen','registered','fatal','Please\x20type\x20your\x20WhatsApp\x20number\x20ðŸ˜\x0aFor\x20example:\x20+5493772455367\x20:\x20'];_0x2c06=function(){return _0x1bbd11;};return _0x2c06();}
// Conexión

sock.ev.on('connection.update', async (update) => {
    const {
        connection,
        lastDisconnect
    } = update
    try {
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) {
                console.log(color(`Bad Session File, Please Delete Session and Scan Again`, 'red'));
                startProo()
            } else if (reason === DisconnectReason.connectionClosed) {
                console.log(color("Connection closed, reconnecting....", 'red'));
                startProo()
            } else if (reason === DisconnectReason.connectionLost) {
                console.log(color("Connection Lost from Server, reconnecting...", 'red'));
                startProo()
            } else if (reason === DisconnectReason.connectionReplaced) {
                console.log(color("Connection Replaced, Another New Session Opened, Please Close Current Session First", 'red'));
                startProo()
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(color(`Device Logged Out, Please Delete Session and Scan Again.`, 'red'));
                startProo()
            } else if (reason === DisconnectReason.restartRequired) {
                console.log(color("Restart Required, Restarting...", 'red'));
                startProo()
            } else if (reason === DisconnectReason.timedOut) {
                console.log(color("Connection TimedOut, Reconnecting...", 'red'));
                startProo()
            } else sock.end(`Unknown DisconnectReason: ${reason}`)
        }
        if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
            console.log(color(`\n🔌 CONECTANDO. . .`, 'cyan'))
        }
        if (update.connection == "open" || update.receivedPendingNotifications == "true") {
            console.log(color(` `, 'magenta'))
            await delay(1999)
            console.log(banner.string)
            console.log(color(``, 'cyan'))
            console.log(color(`\n`, 'magenta'))
            console.log(color(`CARGA COMPLETA 100% `, 'cyan'))
            console.log(color(` `, 'magenta'))
            console.log(color(``, 'cyan'))
            console.log(color(`YA PUEDES USAR EL BOT!`, 'magenta'))
            console.log(color(`Created: Supreme009\n`, 'magenta'))
        }

    } catch (err) {
        console.log(color('Error in Connection.update ' + err, 'red'))
        startProo();
    }
})
sock.ev.on('creds.update', saveCreds)
sock.ev.on("messages.upsert",  () => { })
//EL BOT MAS NAZI DE TODOS "welcome"
sock.ev.on("group-participants.update", async (anu) => {
if(!welkom.includes(anu.id)) return 
try {
const datosgp = await sock.groupMetadata(anu.id)

if(anu.action == 'add') {
const numerodep = anu.participants[0]



const guru8 = fs.readFileSync('./Media/Imagenes/GuruWelcome.png')

const guru7 = `

*😄👋🏻 ¡𝚂𝙰𝙻𝚄𝙳𝙾𝚂, ${numerodep}! 𝙴𝚂 𝚄𝙽 𝙿𝙻𝙰𝙲𝙴𝚁 𝙳𝙰𝚁𝚃𝙴 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙰 𝙽𝚄𝙴𝚂𝚃𝚁𝙾 𝙶𝚁𝚄𝙿𝙾. 🍫🍭*
✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
*🍂 𝙴𝚂𝙿𝙴𝚁𝙰𝙼𝙾𝚂 𝚀𝚄𝙴 𝚃𝙴 𝚂𝙸𝙴𝙽𝚃𝙰𝚂 𝙲𝙾𝙼𝙾𝙳𝙾 𝙰𝚀𝚄𝙸 𝚈 𝚀𝚄𝙴 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙴𝚂 𝙳𝙴 𝙻𝙰𝚂 𝙲𝙾𝙽𝚅𝙴𝚁𝚂𝙰𝙲𝙸𝙾𝙽𝙴𝚂. 😌*
✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
*¡𝙽𝙾 𝙳𝚄𝙳𝙴𝚂 𝙴𝙽 𝙿𝙰𝚁𝚃𝙸𝙲𝙸𝙿𝙰𝚁 𝚈 𝙷𝙰𝙲𝙴𝚁 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰𝚂 𝚂𝙸 𝙻𝙰𝚂 𝚃𝙸𝙴𝙽𝙴𝚂! 🌟🎉*

`
sock.sendMessage(anu.id,{image : guru8, caption : guru7})
}

if (anu.action == 'remove') {
const numerodep2 = anu.participants[0]

const guru9 = fs.readFileSync('./Media/Imagenes/GuruBye.png')


const guru10 = `

*🌟 𝙷𝙰 𝚂𝙸𝙳𝙾 𝚄𝙽 𝙿𝙻𝙰𝙲𝙴𝚁 𝚃𝙴𝙽𝙴𝚁𝚃𝙴 𝙲𝙾𝙽 𝙽𝙾𝚂𝙾𝚃𝚁𝙾𝚂, ${numerodep2} 👋🏻.*

*¡𝙴𝚂𝙿𝙴𝚁𝙰𝙼𝙾𝚂 𝚅𝙴𝚁𝚃𝙴 𝙳𝙴 𝙽𝚄𝙴𝚅𝙾 𝙿𝚁𝙾𝙽𝚃𝙾! ¡𝚀𝚄𝙴 𝚃𝙴𝙽𝙶𝙰𝚂 𝚄𝙽 𝙱𝚄𝙴𝙽 𝙳𝙸𝙰! 🥀*

`
sock.sendMessage(anu.id,{image : guru9, caption : guru10})
}
} catch (e) {
console.log('error: %s', color(e, "red"))
}
})
//CONEXIÓN 
sock.ev.on('messages.upsert', async m => {
 try {
 const info = m.messages[0]
 if (!info.message) return 
 if (info.key && info.key.remoteJid == "status@broadcast") return
 const altpdf = Object.keys(info.message)
 const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
 var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

// CONSTANTES IS  
 const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await sock.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const nome = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? sock.sendMessage(from, {text: teks.trim(), mentions: memberr}) : sock.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).Mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const isOwner = numerodono.includes(sender)
const BotNumber = sock.user.id.split(':')[0]+'@s.whatsapp.net'
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(BotNumber) || false
const iswelkom = isGroup ? welkom.includes(from) : false
const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const options = { timeZone: 'America/Costa_Rica', hour12: false }
const data = new Date().toLocaleDateString('CR', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('CR', options) 
 
 // CONSTANTES NUEVAS

 const enviartexto = (texto) => {
 sock.sendMessage(from,{ text : texto }, {quoted : info})
 }
 
 const enviarimagen = (imagen) => {
 sock.sendMessage(from,{ image : imagen }, {quoted : info})
 }
 
 const enviarimagencap = (imagen,caption) => {
 sock.sendMessage(from,{ image : imagen ,caption : caption}, {quoted : info})
 }
 
const enviarvideos = (videos) => {
 sock.sendMessage(from,{ video : video ,mimetype: 'video/mp4' ,ppt: true, caption : caption}, {quoted : info})
 }
 
 const enviarvideoscap = (videos,caption) => {
 sock.sendMessage(from,{ video : videos ,caption : caption}, {quoted : info})
 }
 
const enviarmusica = (audios) => {
 sock.sendMessage(from,{ audio : musica ,mimetype: 'audio/mp4' ,ppt: true,}, {quoted : info})
 }
 
 const enviarsticker = (sticker) => {
 sock.sendMessage(from,{ sticker : sticker }, {quoted : info})
 }
 
 const enviardocumentos = (documento) => {
 sock.sendMessage(from,{document : documento },{quoted : info})
 }
 
 const text = args.join(' ')
 
 const latensi = exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			})
 
 const reply = (teks) => {sock.sendMessage(from, teks, text, {quoted:m})}
 
 
 // CONSTANTES IFF 
 const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

const mimetype = require('mime-types')

const getExtension = async (type) => {
	return await mimetype.extension(type)
}

const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
 
 // RESPUESTAS AUTOMATICAS
 const respuesta = {
 espere : "Espere un momento porfavor",
 dono : " este comando es solo usado por mi creador",
 premiun: "compre la version premiun",
 grupos : "este comando es solo para grupos",
 privado : " 🕵‍♂️*Este comando solo se puede usar en el chat privado*",
 error : " ⚠️ *Lo siento ocurrio un error, intentelo de nuevo Porfavor*",
 textito : "😤 *Digita un texto Porfavor* ",
 }
 //var de invocar grupo
var teks = encodeURIComponent(args.join(' '))
// MENSAJES EN CONSOLA 
 
 if (isGroup) {
    if (isGroup && isGroup) console.log(`${color('━──────╮•╭──────━', 'orange')}\n${color('𖣘', 'orange')} ${color('Número:', 'orange')} ${color(sender.split('@')[0], 'yellow')}\n${color('𖣘', 'orange')} ${color('Nombre:', 'orange')} ${color(pushname, 'yellow')}\n${color('𖣘', 'orange')} ${color('Horário:', 'orange')} ${color(hora, 'yellow')}\n${color('𖣘', 'orange')} ${color('comando:', 'orange')} ${color(comando)}\n${color('𖣘', 'orange')} ${color('Palabras:', 'orange')} ${color(budy.length, 'orange')}\n${color('𖣘', 'orange')} ${color('Grupo:', 'orange')} ${color(groupName, 'yellow')}\n${color('╰───────╮•╭───────╯', 'orange')}`)
    if (!isGroup && isGroup) console.log(`${color('━──────╮•╭──────━', 'orange')}\n${color('𖣘', 'orange')} ${color('Número:', 'orange')} ${color(sender.split('@')[0], 'yellow')}\n${color('𖣘', 'orange')} ${color('Nombre:', 'orange')} ${color(pushname, 'yellow')}\n${color('𖣘', 'orange')} ${color('Horário:', 'orange')} ${color(time, 'yellow')}\n${color('𖣘', 'orange')} ${color('comando:', 'orange')} ${color('No', 'yellow')}\n${color('𖣘', 'orange')} ${color('Palabras:', 'orange')} ${color(budy.length, 'yellow')}\n${color('𖣘', 'orange')} ${color('Grupo:', 'orange')} ${color(groupName, 'yellow')}\n${color('╰───────╮•╭───────╯', 'orange')}`)
}
 
switch(comando) {

case "creador" :
case "dueño" :
const guru4 = sock.sendMessage(from,{audio : fs.readFileSync("./Media/Audio/GuruInfo.mp3"),mimetype: "audio/mp4", ppt : true },{quoted : info})
const guru1 = fs.readFileSync("./Media/Imagenes/Creador.jpg")

const owner = `
*❗) 𝙴𝚂𝚃𝙴 𝙴𝚂 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁:* 5493772455367
`
enviarimagencap(guru1,owner,guru4)
break


case 'bot':
    const audioOptions = {
        audio: fs.readFileSync("./Media/Audio/GuruIA.mp3"),
        mimetype: "audio/mp4",
        ptt: true,
        quoted: info,
        type: 'audio',
        contentUrl: ''
    };
    const guru5 = await sock.sendMessage(from, audioOptions, { sendMediaAsSticker: false });
    break;

case 'apurate':
case 'APURATE':
case 'apúrate':
case 'rapido':
    const optionsAudio = {
        audio: fs.readFileSync("./Media/Audio/Apurate.mp3"),
        mimetype: "audio/mp4",
        ptt: true,
        quoted: info,
        type: 'audio',
        contentUrl: ''
    };
    const guru7 = await sock.sendMessage(from, optionsAudio, { sendMediaAsSticker: false });
    break;

case 'calleseseñora' :
const soldado4 = fs.readFileSync("./Media/Imagenes/Cállese señora.webp")
enviarsticker(soldado4)
break

case 'descargarbot' : 
const soldado5 = fs.readFileSync('./Media/Imagenes/anita-bot.zip')
enviardocumentos(soldado5)
break 


case 'aleatorio' :
const ale = ['😎','🤡','🧟‍♀️','🧠','🪖','💂‍♂️','🎖️','😏']
const ale2 = Math.floor(Math.random()*ale.length)
const ale3 = ale[ale2]
enviartexto(ale3)
break 

//EL BOT MAS NAZI DE TODOS "DADO"

case 'dado' :
case 'Dado' :
case 'DADO' :
const dado1 = fs.readFileSync("./Media/juegos/dado/dado1.webp")
const dado2 = fs.readFileSync("./Media/juegos/dado/dado2.webp")
const dado3 = fs.readFileSync("./Media/juegos/dado/dado3.webp")
const dado4 = fs.readFileSync("./Media/juegos/dado/dado4.webp")
const dado5 = fs.readFileSync("./Media/juegos/dado/dado5.webp")
const dado6 = fs.readFileSync("./Media/juegos/dado/dado6.webp")
const dado0 = [dado1,dado2,dado3,dado4,dado5,dado6]
const dado8 = Math.floor(Math.random()*dado0.length)
const dado7 = dado0[dado8]
enviarsticker(dado7)

break 

//EL BOT MAS NAZI DE TODOS "soy bonit@"

case 'espejito' :
case 'Espejito' :
case 'ESPEJITO' :
const ale4 = ['eres horrible🤢','eres pasable😷','eres bonit@😲','eres tiern@☺️','eres hermos@🤭','eres un/a judi@ 🤨💣','eres l@ mejor😍','y ese hermoso uniforme nazi💂‍♂️🤗🥰']
const ale5 = Math.floor(Math.random()*ale4.length)
const ale6 = ale4[ale5]
enviartexto(ale6)
break
      
//EL BOT MAS NAZI DE TODOS "add/agregar"
case "agregar" :
case "add" :
if(args.length===0) return enviartexto ("*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰𝚁. (𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙳𝙸𝙶𝙾 𝙳𝙴 𝙿𝙰𝙸𝚂)*")
if(!isGroupAdmins) return enviartexto ("❗) 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙿𝙴𝚁𝙾 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 𝚂𝙴𝚁 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 𝙿𝙰𝚁𝙰 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽.🧍🏻‍♂️")
if(!isBotGroupAdmins) return enviartexto (respuesta.botadmin)
let nuevonazi = info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(from, [nuevonazi] , "add")
break

//EL BOT MAS NAZI DE TODOS "ban/eliminar"
//ELIMINAR
case "ban":
case "eliminar":
case "bam":
case "kick":
  if (args.length === 0) return enviarTexto("*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁. (𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙳𝙸𝙶𝙾 𝙳𝙴 𝙿𝙰𝙸𝚂)*");
  if (!isGroupAdmins) return enviarTexto("❗) 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙿𝙴𝚁𝙾 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 𝚂𝙴𝚁 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 𝙿𝙰𝚁𝙰 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽.🧍🏻‍♂️*");
  if (!isBotGroupAdmins) return enviarTexto(respuesta.botadmin);
  let usuarioAEliminar = info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await sock.groupParticipantsUpdate(from, [usuarioAEliminar], "remove");
  break;

case 'welcome':
case 'Welcome':
case 'WELCOME':
case 'bienvenida':
case 'Bienvenida':
case 'BIENVENIDA':
  if (args.length < 1) return enviartexto("*[❗] 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝟷 𝙿𝙰𝚁𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝚈 𝟶 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁.*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙿𝙰𝚁𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁: .𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝟷.*\n𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁: .𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝟶*");
  if (!isGroup) return enviartexto(respuesta.grupos);
  if (!isGroupAdmins) return enviartexto("*❗) 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙿𝙴𝚁𝙾 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 𝚂𝙴𝚁 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 𝙿𝙰𝚁𝙰 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽.🧍🏻‍♂️*");
  if (!isBotGroupAdmins) return enviartexto(respuesta.botadmin);
  if (Number(args[0]) === 1) {
    if (iswelkom) return enviartexto('*𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾. ✅*');
    welkom.push(from);
    fs.writeFileSync('./Media/welkom.json', JSON.stringify(welkom));
    enviartexto('𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴. ✅');
  } else if (Number(args[0]) === 0) {
    if (!iswelkom) return enviartexto('*[❗] 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙰.*');
    const comandante1 = from;
    processo = welkom.indexOf(comandante1);
    while (processo >= 0) {
      welkom.splice(processo, 1);
      processo = welkom.indexOf(comandante1);
    }
    fs.writeFileSync('./Archivos/welkom.json', JSON.stringify(welkom));
    enviartexto('*𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴. ✅*');
  } else {
    enviartexto('*[❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝟷 𝙿𝙰𝚁𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝚈 𝟶 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁.*');
  }
  break;


//EL BOT MAS NAZI DE TODOS "menu"
case "guru" :
const guru3 = sock.sendMessage(from,{audio : fs.readFileSync("./Media/Audio/GuruAudio.mp3"),mimetype: "audio/mp4", ppt : true },{quoted : info})
const horaActual = obtenerHoraActual();
const fechaActual = obtenerFechaActual();
const userMention = `@${pushname}`;
const guru = fs.readFileSync("./Media/Imagenes/GuruLogo.jpg")
    
const general = `
*🌟 ¡𝙷𝙾𝙻𝙰 ${userMention}! 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙾 𝙰𝙻 𝙼𝙴𝙽𝚄 🌟 
  *★｡+ﾟ☆ﾟ+｡★★｡+ﾟ☆ﾟ+｡★*
  *(📆) 𝙵𝙴𝙲𝙷𝙰: ${fechaActual}*
  *(⌚) 𝙷𝙾𝚁𝙰: ${horaActual}*
  *ʰᵒʳᵃʳⁱᵒ ᵈᵉ ᵃʳᵍᵉⁿᵗⁱⁿᵃ*
  
  *📜 𝗟𝗜𝗦𝗧𝗔 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 📜*
  *• ${prefixo}owner |  ᶜʳᵉᵃᵈᵒʳ ᵈᵉˡ ᵇᵒᵗ*
  *• ${prefixo}infogrupo |  ᵒᵇᵗᵉⁿ ⁱⁿᶠ ᵈᵉˡ ᵍʳᵘᵖᵒ*
  *• ${prefixo}linkgroup |  ᵒᵇᵗᵉⁿ ᵉˡ ˡⁱⁿᵏ ᵈᵉˡ ᵍʳᵘᵖᵒ*
  *• ${prefixo}kick |  ᵉˡⁱᵐⁱⁿᵃʳ ⁱⁿᵗᵉᵍʳᵃⁿᵗᵉ*
  *• ${prefixo}add |  ᵃᵍʳᵉᵍᵃʳ ⁱⁿᵗᵉ́ᵍʳᵃⁿᵗᵉ*
  *• ${prefixo}hidetag |  ᵉⁿᵛⁱᵃʳ ᵘⁿ ᵐᵉⁿˢᵃʲᵉ*
  *• ${prefixo}welcome 1/0 |  ᵃᶜᵗⁱᵛᵃʳ/ᵈᵉˢᵃᶜᵗⁱᵛᵃʳ ᵇⁱᵉⁿᵛᵉⁿⁱᵈᵃ*
`
enviarimagencap(guru,general,guru3)
break

case 'guapos':
    // Verificar si el mensaje proviene de un grupo
    const isGroupMsg = m.isGroupMsg ? true : false;
    if (!isGroupMsg) return;

    const participantes = groupMetadata.participants.map(participante => participante.id);
    const mencionesAleatorias = [];

    // Generar menciones aleatorias sin duplicados
    while (mencionesAleatorias.length < Math.min(5, participantes.length)) {
        const participanteAleatorio = participantes[Math.floor(Math.random() * participantes.length)];
        if (!mencionesAleatorias.includes(`@${participanteAleatorio}`)) {
            mencionesAleatorias.push(`@${participanteAleatorio}`);
        }
    }

    // Enviar el mensaje con las menciones aleatorias
    const mensaje = `Menciones aleatorias: ${mencionesAleatorias.join(', ')}`;
    conn.sendMessage(m.chat, mensaje, MessageType.text);
    break;
                
//LINK DEL GRUPO
case 'link':
case 'Link':
case 'LINK':
case 'linkgroup':
case 'Linkgroup':
case 'LINKGROUP':
case 'linkgc':
case 'Linkgc':
case 'LINKGC':
  if (!isGroup) return enviartexto(respuesta.grupos);
  if (!isBotGroupAdmins) return enviartexto(respuesta.botadmin);
  
  linkgc = await sock.groupInviteCode(from);
  enviartexto('Aquí tienes el enlace del grupo:\nhttps://chat.whatsapp.com/' + linkgc);
  break;

//INFO GRUPO
case 'infogrupo':
case 'Infogrupo':
case 'INFOGRUPO':
case 'descripción':
case 'Descripción':
case 'DESCRIPCIÓN':
  if (!isGroup) return enviartexto(respuesta.grupos);

  const infoGrupo = `
   「𝗜𝗡𝗙𝗢_𝗚𝗥𝗢𝗨𝗣」
*𖣘 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢*
${groupName}
———«•»——————————
*𖣘 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗖𝗜𝗢𝗡*
${groupDesc}
———«•»——————————
  `;
  enviartexto(infoGrupo);
  break;

// HIDETAG
case 'hidetag' :
case 'Hidetag' :
case 'HIDETAG' :
case 'mensaje' :
case 'Mensaje' :
case 'MENSAJE' :
if(!isGroup) return enviartexto (respuesta.grupos)
if(!isGroupAdmins) return enviartexto ("*❗) 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙿𝙴𝚁𝙾 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 𝚂𝙴𝚁 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 𝙿𝙰𝚁𝙰 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽.🧍🏻‍♂️*")
			var group = await sock.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: q,
			contextInfo: { mentionedJid: mem },
			quoted: m
			}
			sock.sendMessage(from, optionshidetag, text)
			break;
					
					


// INVOCAR AL GRUPO
case 'miembros':
case 'todos':
case 'tangall':
case 'tagall':
case 'alltang':
case 'invocar':	
    if (!isGroup) return enviartexto(respuesta.grupos);
    if (!isGroupAdmins) return enviartexto("*❗) 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙿𝙴𝚁𝙾 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 𝚂𝙴𝚁 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 𝙿𝙰𝚁𝙰 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝙴𝚂𝚃𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽.🧍🏻‍♂️*");
    let members_id = [];
    let teks = (args.length > 1) ? body.slice(8).trim() : '';
    teks += `*𖤍 𝗧𝗢𝗗𝗢𝗦 :* ${groupMembers.length}\n`;
    for (let mem of groupMembers) {
        teks += `➪ @${mem.id.split('@')[0]}\n`;
        members_id.push(mem.id);
    }
    mentions('*𝗠𝗜𝗘𝗠𝗕𝗥𝗢𝗦 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢*\n.  「𝚂𝚄𝙿𝚁𝙴𝙼𝙴𝟶𝟶𝟿]\n➪ ' + teks + '━━━━▣━━◤\n◢━━▣━━━━━', members_id, true);
    addFilter(from);
    break;







// COMANDOS SIN PREFIJO
default:




}

function obtenerHoraActual() {
  const fecha = new Date();
  const hora = fecha.getHours();
  const minutos = fecha.getMinutes();
  const horaFormateada = hora < 10 ? `0${hora}` : hora;
  const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
  return `${horaFormateada}:${minutosFormateados}`;
}

function obtenerFechaActual() {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Se suma 1 porque los meses van de 0 a 11
  const año = fecha.getFullYear();
  return `${dia}/${mes}/${año}`;
} 

if (comando === 'a') {
      const audioOptions = {
          audio: fs.readFileSync("./Media/Audio/a.mp3"),
          mimetype: "audio/mp4",
          ptt: true,
          quoted: info,
          type: 'audio',
          contentUrl: ''
      };
      const guru5 = await sock.sendMessage(from, audioOptions, { sendMediaAsSticker: false });
    }

async function loading () {
  var gurulod = [
    "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
    "《 ████▒▒▒▒▒▒▒▒》30%",
    "《 ███████▒▒▒▒▒》50%",
    "《 ██████████▒▒》80%",
    "《 ████████████》100%",
    "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
  ];
  let { key } = await guruBotInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'});

  for (let i = 0; i < gurulod.length; i++) {
    await guruBotInc.sendMessage(from, {text: gurulod[i], edit: key});
  }
}
 
 
 
 
 
 } catch (e) {
 e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'yellow'))
}
 
 
 }
 
 
 
        
    })





    
}

startProo()