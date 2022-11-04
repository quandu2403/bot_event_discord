const { InteractionType } = require('discord.js')
const fs = require('fs');
module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const { commands } = client;
      const { commandName } = interaction;
      const command = commands.get(commandName);

      if (!command) return;

      try {
        await command.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: `Something went wrong while executing this command...`,
          ephemeral: true,
        });
      }
    }else if (interaction.isButton()){
      const { buttons } = client;
      const { customId } = interaction;
      const button = buttons.get(customId);
      if (!button) return new Error('There is no code for this button')

      try{
        await button.execute(interaction, client );
      } catch(error){
        console.error(error);
      }
    }else if (interaction.type == InteractionType.ModalSubmit){
      const { modals } = client;
      const { customId } = interaction;
      const modal =  modals.get(customId);
      if (!modal) return new Error("There is no code for this modal.");

      try {
        await modal.execute(interaction, client);
      } catch (error) {
        console.error(error);
      }
    }
  },
};