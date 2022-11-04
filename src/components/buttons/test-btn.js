const {
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle,
  } = require("discord.js");
module.exports = {
    data:{
        name: `test-btn`
    },
    async execute(interaction, client){
    const modal = new ModalBuilder()
        .setCustomId('crypto-modal')
        .setTitle('Sự Kiện Crypto');

    const textInput = new TextInputBuilder()
        .setCustomId('testValueInput')
        .setLabel(('Tên Dự Án.'))
        .setRequired(true)
        .setMinLength(5)
        .setMaxLength(500)
        .setPlaceholder('Tên của dự án...')
        .setStyle(TextInputStyle.Paragraph);


    const textInput1 = new TextInputBuilder()
        .setCustomId('testValueInput1')
        .setLabel(('Sự Kiện.'))
        .setRequired(true)
        .setMinLength(5)
        .setMaxLength(500)
        .setPlaceholder('Sự kiện...')
        .setStyle(TextInputStyle.Paragraph);  

    const textInput2 = new TextInputBuilder()
        .setCustomId('testValueInput2')
        .setLabel(('Thời gian diễn ra.'))
        .setRequired(true)
        .setMinLength(5)
        .setMaxLength(100)
        .setPlaceholder('Thời gian diễn ra...')
        .setStyle(TextInputStyle.Short);

    const textInput3 = new TextInputBuilder()
        .setCustomId('testValueInput3')
        .setLabel(('Thông tin thêm.'))
        .setMaxLength(1000)
        .setRequired(false)
        .setPlaceholder('Thông tin thêm của dự án...')
        .setStyle(TextInputStyle.Paragraph);

    modal.addComponents(new ActionRowBuilder().addComponents(textInput));
    modal.addComponents(new ActionRowBuilder().addComponents(textInput1));
    modal.addComponents(new ActionRowBuilder().addComponents(textInput2));
    modal.addComponents(new ActionRowBuilder().addComponents(textInput3));
    
    await interaction.showModal(modal);

    }
}