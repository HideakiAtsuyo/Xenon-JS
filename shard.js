const config = require('./config.json');
const Discord = require("discord.js");
const client = new Discord.Client();


const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./index.js', { 
	token: config.token,
	autoSpawn: true,
  respawn: true
});

manager.on('launch', shard => console.log());

manager.spawn(1);

manager.on('launch', shard => (console.log(`[SHARD] Shard ${shard.id+1} / ${manager.totalShards}`)));
