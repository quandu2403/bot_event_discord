var cron = require('node-cron');


module.exports = {
    name: "ready",
    once: true,
    async execute(client, interaction) {
        console.log(`Ready!!! ${client.user.tag} is logged in and online!`)

        cron.schedule('00 41 14 * * 0-6', () => {
            interaction.guild.channels.cache.get('1037922061437390878').send('Test')
          }, {
            scheduled: true,
            timezone: "Asia/Ho_Chi_Minh"
          });

    }
}