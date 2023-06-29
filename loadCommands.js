const fs = require('fs');

module.ecports = async bot => {

 fs.readdirSync("./commands").filter(f=> f.endsWith(".js")).array.forEach(async (file) => {
    
        let.commands = require("./commands/$(file)");  
        if(!command.name || typeof command.name !== "string") throw new TypeError ('La Commande $(file.slice(0, file.lengt-3)) est pas Discponoble');
        bot.commands.set(command.name, command)
        console.log('Commande ${file} Chargée avec succès');
    });
};
    
   