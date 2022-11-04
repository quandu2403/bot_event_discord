const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('button')
        .setDescription('Return a button!'),
    async execute(interaction, client) {
        const button  = new ButtonBuilder()
            .setCustomId('help-btn')
            .setLabel(`Click Me!`)
            .setStyle(ButtonStyle.Primary);

        const button1  = new ButtonBuilder()
            .setCustomId('test-btn')
            .setLabel(`Click Me!`)
            .setStyle(ButtonStyle.Danger);

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents([button, button1]) ]
        });
    },
}