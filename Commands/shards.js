const { Client, Message } = require("discord.js");

module.exports = class backup {
    constructor() {
        this.name = "shards",
        this.alias = [""],
        this.usage = "x!shards"
    }



    async run(client, message, args) {
        try{
           var PrettyTable = require('prettytable');

       var pt = new PrettyTable();
        
        pt.fieldNames(["ID", "PING", "GUILDES", "USERS"]);

        client.shard.broadcastEval('[this.shard.id, this.guilds.size, this.channels.size, this.users.size, (process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2), this.voiceConnections.size]').then(async res => {
            await res.map(r => {
              if(r[0] == client.shard.id) {
                r[0] == `>${client.shard.id+1}`
              }
                pt.addRow([`${r[0]+1}`, `${r[4]}ms`, `${r[1]}`, `${r[3]}`]);
            });
            let tableContent = pt.toString();
            message.channel.send(`\`\`\`prolog\n[SHARDS]\n${tableContent}\`\`\``);
            
        }); 
        }catch(e) {
            throw e;
        }
    }
}
