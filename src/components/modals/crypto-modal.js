const { EmbedBuilder } = require('discord.js');
const { GoogleSpreadsheet } = require('google-spreadsheet');
var moment = require('moment');
require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const SHEET_ID = process.env.SHEET_ID;

module.exports = {
    data: {
        name: 'crypto-modal'
    },
    async execute(interaction, client) {
        interaction.reply({ content: 'Cảm ơn bạn đã chia sẽ thông tin! 🙌 🙌', ephemeral: true });
        
        
        txtInp = `${interaction.fields.getTextInputValue("testValueInput")}`
        txtInp1 = `${interaction.fields.getTextInputValue("testValueInput1")}`
        txtInp2 = `${interaction.fields.getTextInputValue("testValueInput2")}`
        txtInp3 = `${interaction.fields.getTextInputValue("testValueInput3")}`
        
        //embed
        const Embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('__**🔥Sự Kiện Sắp Diễn Ra.🔥**__')
            .setAuthor({  iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag })
            .addFields(
                { name: '> Dự Án.', value: `${interaction.fields.getTextInputValue("testValueInput")}` },
                { name: '> Sự Kiện Sắp Diễn Ra.', value: `${interaction.fields.getTextInputValue("testValueInput1")}` },
                { name: '> Thời Gian Diễn Ra.', value: `${interaction.fields.getTextInputValue("testValueInput2")}` },
            )
            
            .setTimestamp()
        
        if (txtInp3 == '' )
           return
        else {
            Embed.addFields({ name: '> Thông tin thêm.', value: `${interaction.fields.getTextInputValue("testValueInput3")}` })
        }
                
        //send response of modal to channel
        interaction.guild.channels.cache.get('1037922061437390878').send({embeds: [Embed]})

        let getGoogleSheet = async () => {
            try {
                let currentDate = new Date();

                const format = "HH:mm - DD/MM/YYYY"
        
                let formatedDate = moment(currentDate).format(format);
                
                // Initialize the sheet - doc ID is the long id in the sheets URL
                const doc = new GoogleSpreadsheet(SHEET_ID);
                // Initialize Auth - see more available options at https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
                await doc.useServiceAccountAuth({
                    client_email: CLIENT_EMAIL,
                    private_key: PRIVATE_KEY,
                });
        
                await doc.loadInfo(); // loads document properties and worksheets
        
                const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
        
                // append rows
                await sheet.addRow(
                    {
                        "Dự án": txtInp,
                        "Sự kiện": txtInp1,
                        "Thời gian sự kiện": txtInp2,
                        "Thông tin thêm": txtInp3,
                        "Thời gian": formatedDate,
                    });
        
        
                return console.log('Writing data to Google Sheet succeeds!')
            }
            catch (e) {
                return console.error(e)
            }
        }

        getGoogleSheet();
    
    }
}