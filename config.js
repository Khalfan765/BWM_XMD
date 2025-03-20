const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VV2Y6rOBD9lZFfk54LDmGJ1NIAWSAJ2TskGc2DA2bfYhsCucq/j+h0q1u6y/T4yTL2qVNV5xTfQZaHFM9wAwbfQUHCCjHcbllTYDAAWul5mIAucBFDYABUI1WqvTSckCWUDPt0cgvDjNUp7yw1Jwr2y+shE4PEOkH6DO5dUJTnJHR+A+jpyFJ48xtCUJCLfiELw/lm6u1YJxXyml5ut+vVmacvTnB8BvcWEYUkzPxREeAUE5TMcLNCIfkafXliOrfqqPcvbnVtaHBV62p0jOBwEaXMjF7WiRxQPFPq2P8a/Wu80LhvJzJOAjpdvlzW5s2V6HY/qm4mvzeG1DzUIZkM7aH6oE9DP8Ou6eKMhaz5ct23MyE6d+Jkj/V4oS/3m9VcPk7E8rTw54VTrOQ1vxKTc+lNvkjcu6gxR4Sa1DIaOh3bPvaEMa8bVqUZswvXO47ynV/eQjG0PhNfkXetxP+n7qWV1esZjSb1VbMlrxdxfrOSpiN/O+ko+xuEHc2vRlqDePlr9OfH2ryIBgusItHOK1INhXWwtvovWzpOTuutwzsoORWLaJN/0EesJL9jOd6bpNNMZ9c4xzZNlrWmGDvRqBaZFx1GObfmMj6bxKv13hfSCSytXTVWOr1O7m5zvwyuubFEcxvaeOcslWEi97cHS/OfXzOKcWO6YMDfu4BgP6SMIBbm2euZALsAudUWOwSz1/KCl/kQqmtzHU9ddnbE80ZeJ9JS0hpVHKIh4gMH0X66YantP4MuKEjuYEqxa4SU5aSxMKXIxxQM/n7tVJs0wWnO8DR0wQDAfl/ieUWAYo/7i/55DRCjqCj+zDADXeCRPLUwGDBS4i54fTCGfcj3h1JPhH1JHw5lWZOUsd4uHkpQblNMH0F3YYopQ2kBBrwkQEHhRVm+/9MFGa7ZQz9t1j2+C7yQUPaSlUWSI/ddXO8fkePkZca2Tebo7QYTMOA+jjFjYebTNrMyQ8QJwgrrbR5g4KGE4nsXuLgKHdziAZdnhc6mp+21VHrqbu33xzvot5UL8uxxhZMhhJwLn0RFOD8JnoeezvDce+J5EWMXelh0JdCW42Hd9s2v5dnsR5tsd7wcbvN8PdV3uXitthYXBg99PySACXbfq3xGTlwWuzzG2W9wuTpuXHKBTQBNTDhfricboZyfuZfRJ9yHtMDg+8e41HO3xTuKI140RBu03Wrj/KCGAeR/FESG2ttgFqDEQ9kfoyQOM7dpA751o4VyMUNhQsEA6LNOJ176+mhq+/JZmEzUta/qvgo+uvfuxofaJ41nYn1p5nHUrBrpZi8K+dbM98j2uLGk6uEmcsW9E50y5/knIGAAsosUrDPmhCTN4WnGTVLybSzBMZkFlWnIc6EnZli7KcvjwbRuNyMw3HmBof0invJ+jYx9XjFIvRNDdk2c2/ag713t+txGe6joc7BvVnPgjg2L0/gkT1xVz2pnGqT1dqvoi3TcGW5IOaVHO9HCCMfieGePU3i6xTaf0GKHLE+RLvtjeDEPXLGEghvtBUO9PubE65xK3v4P4ZuDH5rzQvw6bt+68Z9d+5A/d+9+wngb4L+QmLahWWP4UTibmnIklzIfIc+SQ95OMkXDVzWPjz2cHEx46oF76+siQczLSQoGgKZnBLogQZSpH/b92UTodUHaqEWxZYi9ux6o7dKaFbj/C0+TAbWYCAAA'
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

