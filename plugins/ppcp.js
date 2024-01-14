import fetch from "node-fetch" 
 let handler = async (m, { conn }) => { 
  
   let data = await (await fetch('https://raw.githubusercontent.com/ShirokamiRyzen/WAbot-DB/main/fitur_db/ppcp.json')).json() 
   let cita = data[Math.floor(Math.random() * data.length)] 
  
   let cowi = await(await fetch(cita.cowo)).buffer() 
   await conn.sendFile(m.chat, cowi, '', '*Laki-Laki*', m) 
   let ciwi = await(await fetch(cita.cewe)).buffer() 
   await conn.sendFile(m.chat, ciwi, '', '*Perempuan*', m) 
 } 
  
 handler.help = ['ppcp'] 
 handler.tags = ['internet'] 
 handler.command = /^ppcp$/i
 handler.register = false
 handler.limit = true
 export default handler