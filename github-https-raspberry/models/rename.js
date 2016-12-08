var fs = require('fs');

//login, name, password (encrypted)}
var renameIndex = () => {
    try {
        fs.rename('_book/index.html', '_book/readme.html', (err) => {});
    } catch (err) {
      console.log();
    }
};

module.exports.renameIndex = renameIndex;
