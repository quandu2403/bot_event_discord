const { SlashCommandBuilder, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Hiển thị danh sách câu lệnh!'),
    async execute(interaction, client) {
        const emoji = '<:TuiTienADA:1039145538047713350>'
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
                },
                {
                    name: `> Hiển thị ví donate ${emoji}`,
                    value: '`$cevi`',
                    inline: false
                }
            ]);

            await interaction.reply({
                embeds: [embed]
            })
    },
};