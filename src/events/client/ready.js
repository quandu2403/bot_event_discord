var cron = require('node-cron');
const { EmbedBuilder} = require('discord.js')

module.exports = {
    name: "ready",
    once: true,
    async execute( client) {
        console.log(`Ready!!! ${client.user.tag} is logged in and online!`)
        const channel_trao_doi = await  client.channels.cache.get('931602162428018694');
  


        const embed_menu = new EmbedBuilder()
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
                    name: `> Hiển thị ví donate <:TuiTienADA:1039145538047713350>`,
                    value: '`$cevi`',
                    inline: false
                }
            ]);

        const embed_scheduler = new EmbedBuilder()
            .setTitle(`Em là Bot sự kiện CEVI đây ạ!! Em xin chào buổi sáng cả nhà yêu ♥️ Chúc cả nhà có một buổi sáng tốt lành, nhiều sức khỏe và may mắn!😊`)
            .setColor(`#CC5Ffa`)
            .setDescription('Hôm nay có sự kiện gì nhà mình nhớ thêm vào bot nha. Hãy chia sẻ cho em và em sẽ chia sẻ lại cho anh/chị ! Hihi. Yêu cả nhà CEVI 🥰 (anh chị có thể hiển thị menu những câu lệnh cần dùng bằng cách gõ : `/menu` hoặc theo danh sách bảng câu lệnh như phía dưới. )')
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
                    name: `> Hiển thị ví donate <:TuiTienADA:1039145538047713350>`,
                    value: '`$cevi`',
                    inline: false
                }
            ]);
        // Sáng
            
        cron.schedule('0 7 * * *', () => {
            console.log('Thông báo sáng');
            channel_trao_doi.send({embeds: [embed_scheduler]  }).then(msg => {
                setTimeout(() => msg.delete(), 3600000)
              }).catch((err) => {console.log(err)}) ;
          }, {
            scheduled: true,
            timezone: "Asia/Ho_Chi_Minh"
          });

        //Chiều        
        cron.schedule('20 16 * * *', () => {
            console.log('Thông báo chiều');
            channel_trao_doi.send({embeds: [embed_menu]  }).then(msg => {
                setTimeout(() => msg.delete(), 3600000)
              }).catch((err) => {console.log(err)}) ;
          }, {
            scheduled: true,
            timezone: "Asia/Ho_Chi_Minh"
          });
        // cron.schedule('* * * * *', () => {
        //     console.log('Nếu không set gì hết thì mặc định sẽ chạy mỗi phút 1 lần');
        //     channel_trao_doi.send({embeds: [embed_scheduler]  }).then(msg => {
        //         setTimeout(() => msg.delete(), 3000)
        //       }).catch((err) => {console.log(err)}) ;
        // });
    }
}