
const { cmd } = require("../lib/command");

cmd(
  {
    pattern: "alive",
    desc: "Check if the bot is active",
    react: "📌"
    category: "main",
    filename: __filename,
  },
  async (
    robin,
    mek,
    m,
    {
      from,
      pushname,
      reply,
    }
  ) => {
    try {
      // Alive message with details
      let aliveMessage = `🟢 **ＩＭ ＡＬＩＶＥ ＮＯＷ

👤 **Owner**: 𝚖𝚊𝚗𝚞𝚜𝚑𝚊 𝚕𝚊𝚜𝚒𝚝𝚑
📱 **Contact Owner**: 94773742779


ᬐ༂᳆╭𝐇𝐄𝐋𝐋𝐎 𝐈𝐌 𝐐𝐔𝐄𝐄𝐍 𝐁𝐔𝐍𝐍𝐘 ╮༂ᬐ


┗┉𝐂𝐀𝐑𝐑𝐄𝐂𝐓 𝐁𝐘=𝐌𝐀𝐍𝐔𝐒𝐇𝐀 𝐋𝐀𝐒𝐈𝐓𝐇┉┛🌹⃝✥⃝৫⃟➤᭄᭄̊̊̊̊࿓࿔😓


📍 ┏𝐎𝐖𝐍𝐄𝐑┒=94776845671
📍 ╭𝐇𝐄𝐋𝐏╮ = 94773742779


📍 ▛𝐍𝐄𝐖 𝐔𝐏𝐃𝐀𝐓𝐄 𝐂𝐎𝐌𝐈𝐍𝐆𝐒𝐎𝐎𝐍▜🦋⃝❉⃟࿔ꦿ


📍 𝐅𝐎𝐋𝐋𝐎𝐖 𝐂𝐇𝐀𝐍𝐄𝐋 𝐀𝐍𝐃 𝐔𝐏𝐃𝐀𝐓𝐄 𝐘𝐎𝐔𝐑 𝐁𝐎𝐓= https://whatsapp.com/channel/0029VbAXsYXIiRozOhimJZ0Z


📌 *𝐐𝐔𝐄𝐄𝐍 𝐁𝐔𝐍𝐍𝐘 𝐆𝐑𝐈𝐋*
`;

      // Send the Alive message with detailed info
     await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/5hd2zv.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363385281017920@newsletter',
                    newsletterName: '𝙱𝚄𝙽𝙽𝚈-𝙼𝙳',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
