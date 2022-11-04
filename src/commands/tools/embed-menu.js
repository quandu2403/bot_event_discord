const { SlashCommandBuilder, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Hiển thị danh sách câu lệnh!'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`Bảng câu lệnh!`)
            .setColor(`#CC5F4E`)
            .setDescription(`Bảng danh sách câu lệnh.`)
            .addFields([
                {
                    name: `> Check giá Coin 📈`,
                    value: '`/coin`',
                    inline: false
                },
                {
                    name: `> Thêm sự kiện mới 📅`,
                    value: '`/event`',
                    inline: false
                },
                {
                    name: `> Thêm thông tin thành viên 👥`,
                    value: '`/info`',
                    inline: false
                }
            ]);

            await interaction.reply({
                embeds: [embed]
            })
    },
};