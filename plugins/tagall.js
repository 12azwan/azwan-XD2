
let handler = async(m, { conn, text, participants }) => {
  let teks = `ā¾š“š¬šŗšŗšØš®š¬ā¾ ${text ? text : ' '}\n\nāāāā įŪ ššš ššš Ūį āāāā\n`
		      	for (let mem of participants) {
		            teks += `ā ā£@${mem.id.split('@')[0]}\n`
				}
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler


