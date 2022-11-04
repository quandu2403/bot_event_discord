const { EmbedBuilder } = require('discord.js');
const { GoogleSpreadsheet } = require('google-spreadsheet');

require("dotenv").config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CLIENT_EMAIL = process.env.CLIENT_EMAIL;
const SHEET_ID = process.env.SHEET_ID_INFO;

module.exports = {
    data: {
        name: 'info-modal'
    },
    async execute(interaction, client) {
        
        
        
        txtInp = `${interaction.fields.getTextInputValue("testValueInput")}`
        txtInp1 = `${interaction.fields.getTextInputValue("testValueInput1")}`
        txtInp2 = `${interaction.fields.getTextInputValue("testValueInput2")}`
        txtInp3 = interaction.user.tag;
        txtInp4 = interaction.user.id;
        
        console.log(txtInp3,txtInp4)
        
        //embed
        const Embed = new EmbedBuilder()
            .setColor(0x002044)
            .setDescription('Cảm ơn bạn đã cung cấp thông tin. 😍 ')
            .setTitle('__**💓Thông tin của bạn.💓**__')
            .setAuthor({  iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag })
            .addFields(
                { name: '> Họ và Tên.', value: `${interaction.fields.getTextInputValue("testValueInput")}` },
                { name: '> Ngày tháng năm sinh.', value: `${interaction.fields.getTextInputValue("testValueInput1")}` },
                { name: '> Địa chỉ ví cá nhân.', value: `${interaction.fields.getTextInputValue("testValueInput2")}` },
            )
            .setTimestamp()
        

                
        //send response of modal to channel
        
            await interaction.reply({
                embeds: [Embed],
                ephemeral: true 
            })

        // });

        let getGoogleSheet = async () => {
            try {
                
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
                        "Họ và Tên": txtInp,
                        "Năm Sinh": txtInp1,
                        "Địa chỉ ví": txtInp2,
                        "Discord UserName": txtInp3,
                        "Discord ID": txtInp4,
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