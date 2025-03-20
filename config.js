const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOqOBT8K1t5lbnLp6JVU7WAiqCo+IXj1n2IkGAAAwMBwSn/+xY6UzMPe+/O8pRKQp9Od5/zBmhKCjRFDRi8gSwnFWSoXbImQ2AA9BJjlAMOBJBBMAC8Nt8utGI7ci8vPZrN1q/pnvcV93pMFmZk1yIeJRue4VxQn8GNA1l5TIj/G8CFY1dmx3PPlRMtpCFbzfPDxEGy50vHrPFSp47GoshgFl6ewa1FhCQnNBxlJ3RGOUymqFlCkn+PvrYktklde63lCj74I5jHvDuTNaOwu1OdnRpvuForc5dJl+/RF/fnVaNcsNP3HSh0qnNI/pQQ3fZ22gk22uFqXjZ8qE6UJH3QL0hIUWAFiDLCmm/rTmZa3NfhbES740M8x9r22DjsPCm3DLvu1boohmZ5lrcT/O8Rf3k14da2OqPeBkJnuvNslqqKdlbwYn/lrdoqXybhxbOOm+Ir8WX+kZX4/+jeWBtbCvq2tdGmfaebriXHt6AzHBmr1O9Ok+p0fsl7EB5334zNuE5DAeNxvWOFu8TbsXY51OZu62dj3ySonkyuctc5QeP0RXfIyvx3LLP1tpOb6QbV84zKRNSkZbksxgaO9Gpuu5Xu2LUle1fJUc3Cuu5yjS0xb/ORNKSy5+iTatfoNVl3cG0GVN/yGY7C8Pn+ohg1VgAGwo0DOQpJwXLISErvez2JAzCo1sjPEbvLCzby63F/WM3Xl7i5zIyp2g/8taHhDPXkc0fvVSazFs5wY0fOM+BAlqc+KgoUTEjB0rxxUFHAEBVg8PdPDlBUs4dxbTlJ4AAmecG2tMySFAYfrn4cQt9PS8rWDfWNdoFyMOA/txFjhIZFq2NJYe6fSIWME2QFGGCYFOjGgQBVxEctHlihY3eChrPNqqmriRtlV/VwdVvKp5Q+rvRkVYHiUX3qdyXlSYao+wQVUX3yERKxKPG+2keAA+S9Z9p/fmlh0C8FumlOSLnui+Yka7TG3eHCVXby3YaH9ihHARiwvEQcOEI/LrNNGiP6G1w87sTddMlncQNXbk9aRWk66UQjz375gvvwFAzePueUkQYtntqdzE3JMAAHzvcIkvbloqL0BKEvi12JH4jKX8WPSyskzLIfFDHAAQrb22B6ggmG9I9REhMaNG3BdzdaqAAxSJICDIAx7XTiRWiM5pWuHmXT1MJQM0INfLr30QaPmJkNtpCxsNI4apZN7+rNM/XazHbQw/y4pxlkFQXdnR8dqP/8LyBgAGKPd84YeXu0EjLk8wqtWaGPVWP8gl3KZ7lwmu0r3fde6UmTenyC+EJMLf9iz8RhJsjqVRn1BNk3gkn/oCdFNJWmxuW5rfZI0ddiISVC/qJWeFzKWmh051QZkqzvXyD0UDo0dotDsBpOw3li4Bjt3KTWYVGnZS1EuVYa5uGSZJIlbjT45ySEYa6HrH/SHg16HxDJ+2Am99Z5e88cJug+597d+E/XPuPP37gvGO+T8xcR01cFbSZhRKa2pUZqqQoRxI5KBC+hfR1dtDR+kVCyt8SDBG63nxzIEshwmp/BABTnIwQcSGDBtM/23ZAzKhg8Z+2QkUW5r/R7KgfOjZZlawbZR9cDrf30ZgNu/wDy4CjxEQgAAA=='
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

