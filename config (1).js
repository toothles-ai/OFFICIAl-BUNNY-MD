const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "CHAMA-MD=Hox0zBxD#Vk-qgckEp4AlIuUBnuEC39bESVcHIrMRiJkyGqN6OZM", // පෙයාර් සයිඩ් එකක් නැති නිසා ඕනම සීසන් එකක් හරියනව(සීසන් එකේ මුලට තියෙන නම කපලා ඔය තියෙන එකට ඉස්සරහින් සීසන් ඇඩ් කරාම හරි)
MONGODB: process.env.MONGODB || "mongodb+srv://knight_rider:GODGURU12345@knight.jm59gu9.mongodb.net/?retryWrites=true&w=majority", // ඔයාගේ mongodb url එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/cp08zo.jpg",
BOT_NAME: process.env.BOT_NAME || "𝙱𝚄𝙽𝙽𝚈-𝙼𝙳",
LANG: process.env.BOT_LANG || 'EN' ,
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
};
