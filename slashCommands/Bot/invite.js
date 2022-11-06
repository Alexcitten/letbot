const {EmbedBuilder} = require('discord.js')

module.exports = {
    name: "pass",
    usage: "/pass",
    category: "ЧТО",
    description: "ПАРОЛЬ???",
    ownerOnly: false,
    run: async (client, interaction) => {

        const variables = [
            "Не пароль.",
            "Не пароль.",
            "Не пароль.",
            "U+ ← 3 раза ← Воспользуйся этим.",
            "Не пароль.",
            "Не пароль.",
            "Не пароль.",
            "Не пароль.",
            "Не пароль.",
            "Не пароль."
        ]

        const pass = variables[Math.floor(Math.random() * variables.length)];

        const embed = new EmbedBuilder()
            .setThumbnail(client.user.displayAvatarURL())
            .setTitle('Пароль')
            .setDescription('Хочешь пароль? Тогда у тебя есть 10% на его выпадение.')
            .addFields([
                {name: `Пароль`, value: `${pass}`}         
            ])
            .setColor('#FF8747')
            .setFooter({ 
                text: `Если всё правильно сделаешь, он подойдёт к команде /core. Я бы мог сделать кд на эту команду, но я не душнила.`, 
                iconURL: `${client.user.displayAvatarURL()}` 
            });

        return interaction.reply({
            embeds: [embed],
            ephemeral: false
        });
    },
};