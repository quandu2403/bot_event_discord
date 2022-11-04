module.exports = {
    data:{
        name: `help-btn`
    },
    async execute(interaction, client){
        await interaction.reply({
            content: 'Hello this is help button!',
        });
    }
}