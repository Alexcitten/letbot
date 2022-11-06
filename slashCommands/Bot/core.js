const {ApplicationCommandOptionType, EmbedBuilder} = require('discord.js')

module.exports = {
    name: "core",
    usage: "/core <password>",
    category: "CORE",
    options: [
        {
            name: 'password',
            description: 'ВВЕДИТЕ ПАРОЛЬ К КОМАНДЕ',
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    description: "???",
    ownerOnly: false,
    run: async (client, interaction) => {

        const password = interaction.options.getString('password')
        if(password === 'Mjc2RjI3NkYyNzZG') {
            const embedPass = new EmbedBuilder()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Молодец!')
            .addFields([
                {name: `3 шифра`, value: `0J7QtNC/0LTQuNCz0Lcg0LzRjyDRgNGP0LjRgSDQsNGJ0YvRhdGD0LbRhNC/KNGM0YHQvSDQvdGB0LPQtNC60YvQvNGK0Lgg0YfQt9GD0L8p`}
            ])
            .setColor('#00FF00')
            .setFooter({ 
                text: `Удачи!`, 
                iconURL: `${client.user.displayAvatarURL()}` 
            });
            await interaction.reply({
                embeds: [embedPass],
                ephemeral: true
            });
        }
                if(password === '8 800 555 3535') {
            const embedPass = new EmbedBuilder()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Чт..')
            .addFields([
                {name: `Ты реально ввёл это?`, value: `0J7QtNC`}
            ])
            .setColor('#FF0000')
            .setFooter({ 
                text: `Удачи!`, 
                iconURL: `${client.user.displayAvatarURL()}` 
            });
            await interaction.reply({
                embeds: [embedPass],
                ephemeral: true
            });
        }
        
        const embed = new EmbedBuilder()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Не-а.')
            .addFields([
                {name: `Чтобы получить данные из этой команды`, value: `Вы должны подобрать пароль, к которому ведут все команды бота.`},
            ])
            .setColor('#FF0000')
            .setFooter({ 
                text: `base64 салат`, 
                iconURL: `${client.user.displayAvatarURL()}` 
            });

        await interaction.reply({
            embeds: [embed],
            ephemeral: true
        });
    },
};
