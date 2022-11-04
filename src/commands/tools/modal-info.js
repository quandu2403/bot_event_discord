const {
  SlashCommandBuilder,
  ModalBuilder,
  ActionRowBuilder,
  TextInputBuilder,
  TextInputStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Thêm thông tin thành viên!"),
 

  async execute(interaction, client) {
    const modal = new ModalBuilder()
        .setCustomId('info-modal')
        .setTitle('Thông tin thành viên');

    const textInput = new TextInputBuilder()
        .setCustomId('testValueInput')
        .setLabel(('Họ Và Tên.'))
        .setRequired(true)
        .setMinLength(5)
        .setMaxLength(100)
        .setPlaceholder('Nhập Họ và Tên...')
        .setStyle(TextInputStyle.Short);


    const textInput1 = new TextInputBuilder()
        .setCustomId('testValueInput1')
        .setLabel(('Ngày Tháng Năm Sinh'))
        .setRequired(true)
        .setMinLength(1)
        .setMaxLength(12)
        .setPlaceholder('Nhập theo định dạng 01/01/1990')
        .setStyle(TextInputStyle.Short);  

    const textInput2 = new TextInputBuilder()
        .setCustomId('testValueInput2')
        .setLabel(('Địa Chỉ Ví Cá Nhân'))
        .setRequired(true)
        .setMinLength(5)
        .setMaxLength(100)
        .setPlaceholder('Nhập địa chỉ ví...')
        .setStyle(TextInputStyle.Short);


    modal.addComponents(new ActionRowBuilder().addComponents(textInput));
    modal.addComponents(new ActionRowBuilder().addComponents(textInput1));
    modal.addComponents(new ActionRowBuilder().addComponents(textInput2));

    
    await interaction.showModal(modal);
  },
};
