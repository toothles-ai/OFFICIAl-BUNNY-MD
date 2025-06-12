const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `
👋 Hi*: ${pushname}

⏳ Uptime*: ${runtime(process.uptime())}

📟 RAM*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB

ᬐ༂᳆╭𝐇𝐄𝐋𝐋𝐎 𝐈𝐌 𝐁𝐔𝐍𝐍𝐘 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐖𝐇𝐀𝐓𝐒𝐀𝐏 𝐁𝐎𝐓╮༂ᬐ

┗┉𝐂𝐀𝐑𝐑𝐄𝐂𝐓 𝐁𝐘=𝐌𝐀𝐍𝐔𝐒𝐇𝐀 𝐋𝐀𝐒𝐈𝐓𝐇┉┛🌹⃝✥⃟☺️᭄ꦿ

┝𝐓𝐇𝐈𝐒 𝐈𝐒 𝐍𝐄𝐖 𝐖𝐇𝐀𝐓𝐒𝐀𝐏 𝐁𝐎𝐓┦ 😮⃝৫⃟➤᭄᭄̊̊̊̊࿓࿔😓

┏𝐎𝐖𝐍𝐄𝐑┒=94776845671
╭𝐇𝐄𝐋𝐏╮ = 94773742779

▛𝐍𝐄𝐖 𝐔𝐏𝐃𝐀𝐓𝐄 𝐂𝐎𝐌𝐈𝐍𝐆𝐒𝐎𝐎𝐍▜🦋⃝❉⃟࿔ꦿ
`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/PvtyPSg8/SulaMd.jpg` },  // Image URL
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
