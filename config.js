const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || '[14:44, 03/05/2025] @ZeroCoolSec: BWM-XMD;;;H4sIAAAAAAAAA61UW4+iSBT+L/WqGQUElKSTARrkIireZbMPJRRQyq2rChEn/d832N0zk83sbG+yPBWnzuU7p77vfANFiSlyUQuUb6Ai+AoZ6o6srRBQgFbHMSKgDyLIIFAAdqZSu7dKwUKoxNdFqfpWtMfm7jpz7Tsql7htEjtsQ277BF77oKpPGQ5/k9DmYz4mzZ5Dwf5QLFgqwnjb0CVFMb2Oz0iUp0Liu0fy7D2B1y4jxAQXiVGlKEcEZi5qlxCTz8FH1nmaSBV/rO3Z2uOqZjVMZp7pVWeNdw9NYQeWhpuXu5AfPwd/5lmLRZVgtNBH7Ys69eehGVxMx+HYC3JLem8oFDa9a2/lv8GnOClQZEeoYJi1n547MnyyP9n7I66l0HEi/ZitvHKvk55opYuRSna2mLr1bMN7nwM+tmeSNeVu1fa2MAfX+0hz3AOD3G5McnGu8Zupz62laT4/JD8DX5IPrlz+y9x9W19ZWVCXxvF5P17ZRXE3ILHTgYuwJQTcvHTvRmQHrflJ2gg+Vd1kVGuDvbbg4PTFM1ptJsLzIGb7Y3b2K2c4jNJk5Y9/wIesJr9DeZxX9Y3KbEM3m+nOt1LxhWzSMKNzztT41S2MY/kYXHer2Um9nxDJdGEWCPi8yaYDYRUMpdRpuKOdET41Vb3MAnfYYP/p0dEFtXYEFO61DwhKMGUEMlwWD9tE7gMYXdcoJIg9xguCEw1MYdacjZN7dJbbW7qwDCrn/iVRe+sNR6Kt1tvMMxkbT6APKlKGiFIUWZiykrQeohQmiALlj8dLdU0TlJcMOTgCCuBlSRjzY16WRl/plyaFjMKq+lIgBvogJmXuIaAwUqM+ePgLojbi+LEoiKIqjSXVGPEcP5pMzLHISYIsdx3mbzU3OEeUwbwCCiePJF6WeEl87f8/MCaibIriUJiY8lgdqupwJE9GhmwYhsyNxcm/wvizDwp0Y28s7mYvcH0QY0LZtqirrITRB8U/LmEYlnXB1m0R6t0BEaD8ZEaM4SKhXWN1AUmY4ivSuz6AEsOMou/PjQiK3m3fo7uoCDGIMwoUoHuLg3TdWoaTx7ynTqeql6h6ooIf1T44/MaRxsD1M0ptd6SHA2d92SeeSW/jI8ccPbhyAX8c8Zep30sO26dfJAEKuCG9gFUcIHrIB35m0sJE56mz5MvLwuG4+3WnLQZ3OZrFp1VlDCe21TsvTrzknAZc6ElOUoveYFLAF673vBSKDaRC+9wRvg8idMUh+rnYteZdNT8Hcb1bGKxuAmHnLJnne/sVP1vNNRb2bsX8IHGrM1p7SNfTu1uQaPlsV04koYM/v7vOsNnvt+umHNbOKOOb9F1d+UPWf+eU8gtWZQ8nThZlSZCGw8lYEgRZGX3t7H1QwC4T+BogUuplma1RCD6WR/a+tPG7rPDjN8bosQPfI/+l+ttUOm4NX/s/ZXjfqf+wl7RQs0kilGu9Votlu63M8lk7efF0flr7+Wmyj/LFvNIuy9LkwGtH8iqDLC5JDhQAi4iUj+ZIWXdktYu4/E0xXR3aRvI21gxSpv4QwK80xb95LUlZWZCmnUhXk0CYgD7IW7Wq1gyyDz0Btfvc5Qq8/gUhULvheAgAAA==
[14:44, 03/05/2025] @ZeroCoolSec: 
SESSION CONNECTED

📱 Follow the channel for bot updates:  
https://

🌐 For more info, visit:  
https://www.ibrahimadams.site

😎 Made by Sir Ibrahim Adams
                    ',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "5phesihle",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " ZerocoolSEC",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'getsuga tenshou',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/9ku1lu.mp4',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

