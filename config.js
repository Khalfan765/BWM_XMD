const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV246qSBT9lUm9yhnlotAmnQygKGoLKhdlch4KKKCQOwWKHf99gt2d7oc5Z3p4qhTF2qv2WmvzCrIc12iNOjB9BUWFW0hQvyRdgcAUSE0QoApQwIcEgikoxUoI2NqzN6qQRSJkmNuBeVIE8mLKK1psGHruKrNSDOn6GdwpUDRugr3fAF4b86SGhbJb8/zo5ZA3rrdn56dZJnk0v841Di64LvXHYyN8BvceEeIKZ+G8iFCKKpisUadDXH2Pfi2n47ZYKui6uviWNFPpdTsZuF3ln267o7G4yNsrV9amzcy/R98d3yomWftlQNKtvZNf9P2yKuZaXDCZfGiX3XVjR6I/UUfmG/0ahxnyVR9lBJPu232fvOQd4c2Q102X6fj99qQzi61at+PD0KmWZSyVT0PohsO58D3iy1xMqks7OOnQZjXF4rrQCfi4bRSsLdtEmqg76zLouJu0+0pcrz68cv4/fWfU/IatsClDTzBuitSk0SXLx66UKsXxaPJpTDd5k0aVZX6PfqyNRJYYfD2YLGP1JA0m/Gx7cs5JRZLWMpPJeG9gN95WC+GTPiRN9TuW7BFdzhgHanDTJQiHibGgr4zqd5Ilt04wuNjRkHfUoLKSzdyScvtouOVKIt5mxQVkmEqTbs3e3Ga5E0674WHJzRw33D0/bnRGneqDKX2nQIVCXJMKEpxnj70JBaDfHpBXIfLoLshuin60UjJptZW+DWgtGhlw5U08yXLoq6B2+xkxhoeRHYyeAQWKKvdQXSN/iWuSV90LqmsYohpM//5JgQxdyZtufTWWpkCAq5qYWVMkOfQ/RP14CT0vbzJy6DJP7heoAtPR5zYiBGdh3bexyWDlRbhFcgRJDaYBTGp0p4CPWuyhHg/kairDMLgcJiWdNudYI9Dpwp5ylGdvR1yXFQQ+EH7wY4H/wXET9AMyXPDjiWbpAAXQhS4HKIDfI9N/80sFC3QJbVcTysXIsJrIPl0bgSXLuF6KDxXeWo8q5IMpqRpEARd656Yw8jPKfoPrjYcueuoKAlHM6B7m2pyLy7JjjuYX3DdJwfT1c0zJud/j2TK9Xm/4OaBA+nAg7m/OjMc8TT9xzIQdTemnv+o/L30jYVH8mSECKJDB/jRYRzAJYPbHPDnjzO/6gu9q9FA+IhAnNZgCeT0YnLVQnuvLQthwi4WohqIciuBTvY8UvNls0QUqkjU1P8ed3vE3e1sIt25jQTsYKbwo433sTywvdjLv+V9AwBScEkOXTrWmDwZl4Shb8WwbNwZf/VA8lDw+p9rhGEn+Uk0K9kQ7u2WL2q3dKcSJWU+5Vu7tgtQArQ5yPiv3Yamv/EgUn/tqby76Wow5qrfwujZN52wGxwu93W4K3N1myUh3FmJCzETVCm51sIr1sQ2iaGgFM0WwHHJNMgNr/Gnh+ft26BkXpVylJlZC38fiWz4f8yF5n8v4EZ3Xd88FGD3G3Lsa/6nap/1Hd+oLxvvg/IXFpH2ddcswxuuVKsRCI9AxDF4ETNtJ9iShi5ifTyxKjirjsOB+/0mBIoEkyKu0/6+lLgQUSGBNxM/4GjhFNYFpAaY0zzGcwPHsmAJpJxbFgUDykXog9o/UaeD+DwnviqIQCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
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

